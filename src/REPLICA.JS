/**
 * Sticky Scroll Feature - JavaScript Module
 * Production-ready implementation using Intersection Observer API
 *
 * Features:
 * - High-performance scroll detection with Intersection Observer
 * - Smooth fade and scale animations
 * - Responsive design support
 * - Automatic cleanup and memory management
 * - Debugging console logs
 *
 * Author: Development Team
 * Last Updated: 2026
 */

class StickyScrollFeature {
  /**
   * Initialize the Sticky Scroll Feature
   * @param {Object} options - Configuration options
   * @param {string} options.mediaSelector - CSS selector for media wrappers (default: '.perks_media-wrapper')
   * @param {string} options.textSelector - CSS selector for text wrappers (default: '.perks_text-wrapper')
   * @param {string} options.activeClass - Class name for active state (default: 'is-active')
   * @param {string} options.topicAttribute - Data attribute for topic identification (default: 'data-topic')
   * @param {string} options.rootMargin - Intersection Observer root margin (default: '-40% 0px -40% 0px')
   * @param {boolean} options.debug - Enable debug logging (default: false)
   */
  constructor(options = {}) {
    // Configuration
    this.config = {
      mediaSelector: options.mediaSelector || ".perks_media-wrapper",
      textSelector: options.textSelector || ".perks_text-wrapper",
      activeClass: options.activeClass || "is-active",
      topicAttribute: options.topicAttribute || "data-topic",
      rootMargin: options.rootMargin || "-40% 0px -40% 0px",
      debug: options.debug || false,
    };

    // State
    this.textWrappers = [];
    this.mediaWrappers = [];
    this.currentActiveTopic = null;
    this.observer = null;
    this.resizeObserver = null;

    // Initialize
    this.init();
  }

  /**
   * Initialize the feature
   */
  init() {
    this.log("Initializing Sticky Scroll Feature...");

    // Get DOM elements
    this.textWrappers = document.querySelectorAll(this.config.textSelector);
    this.mediaWrappers = document.querySelectorAll(this.config.mediaSelector);

    // Validate elements
    if (this.textWrappers.length === 0 || this.mediaWrappers.length === 0) {
      this.log("ERROR: Required elements not found", "error");
      return false;
    }

    this.log(
      `Found ${this.textWrappers.length} text wrappers and ${this.mediaWrappers.length} media wrappers`,
    );

    // Setup observers
    this.setupIntersectionObserver();
    this.setupResizeObserver();

    // Set initial active state
    this.initializeActiveState();

    this.log("Initialization complete");
    return true;
  }

  /**
   * Setup Intersection Observer for scroll detection
   */
  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: this.config.rootMargin,
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const topic = entry.target.getAttribute(this.config.topicAttribute);
          this.updateActiveImage(topic);
        }
      });
    }, observerOptions);

    // Observe all text wrappers
    this.textWrappers.forEach((wrapper) => {
      this.observer.observe(wrapper);
    });

    this.log("Intersection Observer setup complete");
  }

  /**
   * Setup Resize Observer for responsive adjustments
   */
  setupResizeObserver() {
    if (!window.ResizeObserver) {
      this.log("ResizeObserver not supported, skipping setup", "warn");
      return;
    }

    this.resizeObserver = new ResizeObserver(() => {
      this.adjustStickyPosition();
    });

    const mediaContainer = document.querySelector(".perks_media-container");
    if (mediaContainer) {
      this.resizeObserver.observe(mediaContainer);
      this.log("Resize Observer setup complete");
    }
  }

  /**
   * Initialize the active state based on the first text wrapper
   */
  initializeActiveState() {
    if (this.textWrappers.length > 0) {
      const firstTopic = this.textWrappers[0].getAttribute(
        this.config.topicAttribute,
      );
      this.updateActiveImage(firstTopic, true);
    }
  }

  /**
   * Update the active image based on the current topic
   * @param {string} topic - The topic to activate
   * @param {boolean} force - Force update even if topic is already active
   */
  updateActiveImage(topic, force = false) {
    // Avoid unnecessary updates
    if (!force && this.currentActiveTopic === topic) {
      return;
    }

    this.currentActiveTopic = topic;
    this.log(`Updating active image to topic: "${topic}"`);

    // Update all media wrappers
    this.mediaWrappers.forEach((wrapper) => {
      const wrapperTopic = wrapper.getAttribute(this.config.topicAttribute);

      if (wrapperTopic === topic) {
        // Activate the matching wrapper
        wrapper.classList.add(this.config.activeClass);

        // Trigger reflow for animation
        void wrapper.offsetHeight;

        this.log(`Activated media wrapper: "${wrapperTopic}"`);
      } else {
        // Deactivate other wrappers
        wrapper.classList.remove(this.config.activeClass);
      }
    });

    // Dispatch custom event
    this.dispatchEvent("stickyScrollChange", { topic });
  }

  /**
   * Adjust sticky position based on viewport and navbar height
   */
  adjustStickyPosition() {
    const mediaContainer = document.querySelector(".perks_media-container");
    if (!mediaContainer) return;

    const navHeight = document.querySelector("header")?.offsetHeight || 0;
    const topOffset = Math.max(
      15,
      Math.round((navHeight / window.innerHeight) * 100),
    );

    mediaContainer.style.top = `${topOffset}vh`;
    this.log(`Adjusted sticky position to ${topOffset}vh`);
  }

  /**
   * Dispatch custom event
   * @param {string} eventName - Name of the event
   * @param {Object} detail - Event detail data
   */
  dispatchEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
  }

  /**
   * Get the current active topic
   * @returns {string|null} The currently active topic
   */
  getActiveTopic() {
    return this.currentActiveTopic;
  }

  /**
   * Manually set the active topic
   * @param {string} topic - The topic to activate
   */
  setActiveTopic(topic) {
    this.updateActiveImage(topic, true);
  }

  /**
   * Destroy the feature and cleanup
   */
  destroy() {
    this.log("Destroying Sticky Scroll Feature...");

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    this.textWrappers = [];
    this.mediaWrappers = [];
    this.currentActiveTopic = null;

    this.log("Cleanup complete");
  }

  /**
   * Logging utility
   * @param {string} message - Message to log
   * @param {string} level - Log level ('log', 'warn', 'error')
   */
  log(message, level = "log") {
    if (!this.config.debug) return;

    const prefix = "[StickyScroll]";
    const timestamp = new Date().toLocaleTimeString();

    switch (level) {
      case "warn":
        console.warn(`${prefix} [${timestamp}] ${message}`);
        break;
      case "error":
        console.error(`${prefix} [${timestamp}] ${message}`);
        break;
      default:
        console.log(`${prefix} [${timestamp}] ${message}`);
    }
  }
}

/**
 * Auto-initialize on DOM ready
 */
let stickyScrollInstance = null;

function initializeStickyScroll(options = {}) {
  if (stickyScrollInstance) {
    console.warn("StickyScroll already initialized");
    return stickyScrollInstance;
  }

  stickyScrollInstance = new StickyScrollFeature(options);
  return stickyScrollInstance;
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeStickyScroll({ debug: false });
  });
} else {
  initializeStickyScroll({ debug: false });
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = StickyScrollFeature;
}

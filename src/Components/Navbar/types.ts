/**
 * Interface for the NavbarStatus state.
 *
 * @interface NavbarStatus
 * @property {boolean} search - Whether the search input is visible, true by default
 * @property {boolean} close - Whether the close button is visible, false by default
 */
export interface NavbarStatus {
  /**
   * If set this true, Search button will shown in devices
   * that smaller than 640px
   *
   * This will set to true by default, and will be reset to
   * default if screen width exeeds 640px
   */
  search: boolean;

  /**
   * If set this true, Navbar title will be hidden, and Close
   * button will shown
   *
   * This will set to false by default, and will be reset to
   * default if screen width exeeds 640px
   */
  close: boolean;
}

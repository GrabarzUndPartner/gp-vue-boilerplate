export default class Match {
  constructor(screen_idx, pattern_lev, pattern_idx, distance) {
    this.screen_idx = screen_idx || 0;
    this.pattern_lev = pattern_lev || 0;
    this.pattern_idx = pattern_idx || 0;
    this.distance = distance || 0;
  }
}

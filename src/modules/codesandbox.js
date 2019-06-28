import rateLimit from 'reqlim';

// TODO: Remove this module if you eject from codeSandbox

export default function codeSandbox () {
  // Prevent loops eating all container resources!
  // This rate-limit strategy is per-resource by default
  this.options.serverMiddleware.push(
    rateLimit({
      windowMs: 3000,
      max: 3
    })
  );
}

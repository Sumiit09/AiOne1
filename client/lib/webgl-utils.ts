export function canUseWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
    if (!gl) return false;
    return true;
  } catch (e) {
    return false;
  }
}

export function getWebGLSupportError(): string | null {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
    if (!gl) {
      return 'WebGL is not supported in this browser';
    }
    return null;
  } catch (e) {
    return `WebGL error: ${e instanceof Error ? e.message : 'Unknown error'}`;
  }
}

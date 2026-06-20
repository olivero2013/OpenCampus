export type ResourcePathSegment = {
  type: string;
  id: string | number;
};

export class ResourcePath {
  static normalize(path: string): string {
    return path
      .trim()
      .replace(/\/+/g, '/')
      .replace(/\/$/, '');
  }

  static build(...segments: ResourcePathSegment[]): string {
    if (segments.length === 0) {
      throw new Error('At least one resource path segment is required.');
    }

    return segments
      .map((segment) => `${segment.type}:${String(segment.id).trim()}`)
      .join('/');
  }

  static split(path: string): string[] {
    return ResourcePath.normalize(path)
      .split('/')
      .filter(Boolean);
  }

  static matches(pattern: string, target: string): boolean {
    const patternSegments = ResourcePath.split(pattern);
    const targetSegments = ResourcePath.split(target);

    for (let index = 0; index < patternSegments.length; index += 1) {
      const patternSegment = patternSegments[index];

      if (patternSegment === '*') {
        return targetSegments.length > index;
      }

      const targetSegment = targetSegments[index];
      if (!targetSegment || patternSegment !== targetSegment) {
        return false;
      }
    }

    return patternSegments.length === targetSegments.length;
  }

  static depth(path: string): number {
    return ResourcePath.split(path).length;
  }
}

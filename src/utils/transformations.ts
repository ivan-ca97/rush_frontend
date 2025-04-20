export type FieldTransformMap<T> = {
    [K in keyof T]?: (value: any) => T[K];
};

export const applyFieldTransforms = <T extends object> (obj: T, map: FieldTransformMap<T>): T => {
    const result: any = { ...obj };

    for (const key in map) {
      if (key in obj) {
        const transform = map[key];
        if (transform) {
          result[key] = transform((obj as any)[key]);
        }
      }
    }

    return result;
}
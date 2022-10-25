export function suspensePromiseWrapper<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let error: unknown;

  const suspender: Promise<void> = promise.then(
    (r: T) => {
      status = 'success';
      result = r;
    },
    (e: unknown) => {
      status = 'error';
      error = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw error;
      }

      return result;
    }
  };
}

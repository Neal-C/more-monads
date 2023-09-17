// Wrapper Type
// Typescript-ish version of Rust's Option, Scala's Either, Haskell's Maybe, or Java's Optional.
type Option<T> = T | null;

// Wrap Function
// turns T into Option<T>

function some<T>(x: T): Option<T> {
	return x;
}

/// a Run Function
// runs transformation on Option<T>

function run<T>(input: Option<T>, transformFn: (x: T) => Option<T>): Option<T> {
	if (input === null) {
		return null;
	}
	return transformFn(input);
}

//Good note: Futures / Promises are also Monads -> handle the possibility for values to only become available later;
// internal handles the callback and scheduling for us

// Note : Lists / Arrays are also Monads
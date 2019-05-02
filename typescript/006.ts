/* Mapped types */

interface Options {
  material: string;
  backlight: boolean;
}
/* VERBOSE VERSION */
// Read-only interface
interface VerboseReadonlyOptions {
  readonly material: string;
  readonly backlight: boolean;
}
// Optional interface
interface VerboseOptionalOptions {
  material?: string;
  backlight?: boolean;
}
// Nullable interface
interface VerboseNullableOptions {
  material: string | null;
  backlight: boolean | null;
}
/*
 * Alternative to all above repetition. Three reusable types are
 * created that can be used to generate read-only, optional, or
 * nullable type variations with a single line of code. The three
 * named types create these variations of the options interface.
 */

/* Mapped types */
type ReadOnly<T> = { readonly [key in keyof T]: T[key] };
type Optional<T> = { [key in keyof T]?: T[key] };
type Nullable<T> = { [key in keyof T]: T[key] | null };
// Create new three types replace verbose version above
type ReadOnlyOptions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

let option1: VerboseOptionalOptions = {};
let sameOption1: OptionalOptions = {};

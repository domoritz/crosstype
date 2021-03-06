/* ****************************************************************************************************************** */
// region: General
/* ****************************************************************************************************************** */

export interface SourceFileInfo {
  fileName: string,
  packageName?: string,
  packagePath?: string
}

export type NumberRange = { min: number, max?: number }

// endregion


/* ****************************************************************************************************************** */
// region: Placeholder Types
/* ****************************************************************************************************************** */
// Will be replaced

export type OptionsConfigSet = { compileOptions?: OptionsConfig, parseOptions?: OptionsConfig }
export type OptionsTypesSet = { CompileOptions: CompileOptions, ParseOptions: ParseOptions }
export type OptionsConfig = any
export type ParseOptions = Record<string, any>
export type CompileOptions = Record<string, any>
export type DefinitionCollection = any
export type NodeArray<T> = T[]

// endregion

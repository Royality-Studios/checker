/// <reference types="@rbxts/types" />
declare function isPlayer(x: Player): boolean;
declare function isModel(x: Model): boolean;
declare function RunningOn(): string;
declare function InTable<T>(x: T[], y: T): boolean;
declare const IsStudio: () => boolean;
declare function isAlive(x: Player): boolean;
declare function DoesExist(x: unknown): boolean;
export { isPlayer, isModel, RunningOn, IsStudio, InTable, isAlive, DoesExist };

/// <reference types="@rbxts/types" />
declare function isPlayer(x: Player): boolean;
declare function isModel(x: Model): boolean;
declare const IsClient: () => boolean;
declare const IsServer: () => boolean;
declare function InTable<T>(x: T[], y: T): boolean;
declare const IsStudio: () => boolean;
declare function isAlive(x: Player): boolean;
declare function DoesExist(x: unknown): boolean;
declare function ReturnDataType(x: unknown): string;
declare const IsEquipped: (x: Tool) => boolean;
export { isPlayer, isModel, IsServer, IsClient, IsStudio, InTable, isAlive, DoesExist, ReturnDataType, IsEquipped };

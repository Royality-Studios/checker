const RunService = game.GetService("RunService");

function isPlayer(x: Player): boolean {
  if (classIs(x, "Player")) {
    return true;
  } else {
    return false;
  }
}

function isModel(x: Model): boolean {
  if (classIs(x, "Model")) {
    return true;
  } else {
    return false;
  }
}

function RunningOn(): string {
  if (RunService.IsClient()) {
    return "client";
  } else {
    return "server";
  }
}

function InTable<T>(x: T[], y: T): boolean {
  return x.includes(y);
}

const IsStudio = (): boolean => RunService.IsStudio();

function isAlive(x: Player): boolean {
  if (isPlayer(x)) {
    const human = x.Character?.FindFirstChild("Humanoid") as Humanoid;
    if (human.Health >= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function DoesExist(x: unknown): boolean {
  if (x !== undefined) {
    return true;
  } else {
    return false;
  }
}

function ReturnDataType(x: unknown): string {
  return typeOf(x);
}

export { isPlayer, isModel, RunningOn, IsStudio, InTable, isAlive, DoesExist, ReturnDataType };

-- Compiled with roblox-ts v1.3.3
local RunService = game:GetService("RunService")
local Players = game:GetService("Players")
local function isPlayer(x)
	if x.ClassName == "Player" then
		return true
	else
		return false
	end
end
local function isModel(x)
	if x.ClassName == "Model" then
		return true
	else
		return false
	end
end
local IsClient = function()
	return RunService:IsClient()
end
local IsServer = function()
	return RunService:IsServer()
end
local function InTable(x, y)
	return table.find(x, y) ~= nil
end
local IsStudio = function()
	return RunService:IsStudio()
end
local function isAlive(x)
	if isPlayer(x) then
		local _result = x.Character
		if _result ~= nil then
			_result = _result:FindFirstChild("Humanoid")
		end
		local human = _result
		if human.Health >= 0 then
			return true
		else
			return false
		end
	else
		return false
	end
end
local function DoesExist(x)
	if x ~= nil then
		return true
	else
		return false
	end
end
local function ReturnDataType(x)
	return typeof(x)
end
local IsEquipped = function(x)
	return if x.Parent == Players.LocalPlayer.Character then true else false
end
return {
	isPlayer = isPlayer,
	isModel = isModel,
	IsServer = IsServer,
	IsClient = IsClient,
	IsStudio = IsStudio,
	InTable = InTable,
	isAlive = isAlive,
	DoesExist = DoesExist,
	ReturnDataType = ReturnDataType,
	IsEquipped = IsEquipped,
}

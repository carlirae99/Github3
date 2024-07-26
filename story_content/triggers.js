function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EhwJAySbhT":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6OA1CFrnZ9l');
const duration = 2500;
const easing = 'ease-out';
const id = '6cwMWzT8riF';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};

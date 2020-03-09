/**
 * scratchblocks v3.3.3
 * https://scratchblocks.github.io/
 * Render scratchblocks code to SVG images.
 *
 * Copyright 2013–2020, Tim Radvan
 * @license MIT
 */
var translations=function(a){'use strict';var b={"move %n steps":"\u79FB\u52A8 %n \u6B65","turn @turnRight %n degrees":"\u53F3\u8F6C @turnRight %n \u5EA6","turn @turnLeft %n degrees":"\u5DE6\u8F6C @turnLeft %n \u5EA6","point in direction %d.direction":"\u9762\u5411 %d.direction \u65B9\u5411","point towards %m.spriteOrMouse":"\u9762\u5411 %m.spriteOrMouse","go to x:%n y:%n":"\u79FB\u5230 x:%n y:%n","go to %m.location":"\u79FB\u5230 %m.location","glide %n secs to x:%n y:%n":"\u5728 %n \u79D2\u5185\u6ED1\u884C\u5230 x:%n y:%n","change x by %n":"\u5C06x\u5750\u6807\u589E\u52A0 %n","set x to %n":"\u5C06x\u5750\u6807\u8BBE\u5B9A\u4E3A %n","change y by %n":"\u5C06y\u5750\u6807\u589E\u52A0 %n","set y to %n":"\u5C06y\u5750\u6807\u8BBE\u5B9A\u4E3A %n","set rotation style %m.rotationStyle":"\u5C06\u65CB\u8F6C\u6A21\u5F0F\u8BBE\u5B9A\u4E3A %m.rotationStyle","say %s for %n secs":"\u8BF4 %s %n \u79D2","say %s":"\u8BF4 %s","think %s for %n secs":"\u601D\u8003 %s %n \u79D2","think %s":"\u601D\u8003 %s",show:"\u663E\u793A",hide:"\u9690\u85CF","switch costume to %m.costume":"\u5C06\u9020\u578B\u5207\u6362\u4E3A %m.costume","next costume":"\u4E0B\u4E00\u4E2A\u9020\u578B","next backdrop":"\u4E0B\u4E00\u4E2A\u80CC\u666F","switch backdrop to %m.backdrop":"\u5C06\u80CC\u666F\u5207\u6362\u4E3A %m.backdrop","switch backdrop to %m.backdrop and wait":"\u5C06\u80CC\u666F\u5207\u6362\u4E3A %m.backdrop \u5E76\u7B49\u5F85","change %m.effect effect by %n":"\u5C06 %m.effect \u7279\u6548\u589E\u52A0 %n","set %m.effect effect to %n":"\u5C06 %m.effect \u7279\u6548\u8BBE\u5B9A\u4E3A %n","clear graphic effects":"\u6E05\u9664\u6240\u6709\u56FE\u5F62\u7279\u6548","change size by %n":"\u5C06\u89D2\u8272\u7684\u5927\u5C0F\u589E\u52A0 %n","set size to %n%":"\u5C06\u89D2\u8272\u7684\u5927\u5C0F\u8BBE\u5B9A\u4E3A %n","go to front":"\u79FB\u81F3\u6700\u4E0A\u5C42","go back %n layers":"\u4E0B\u79FB %n \u5C42","play sound %m.sound":"\u64AD\u653E\u58F0\u97F3 %m.sound","play sound %m.sound until done":"\u64AD\u653E\u58F0\u97F3 %m.sound \u76F4\u5230\u64AD\u653E\u5B8C\u6BD5","stop all sounds":"\u505C\u64AD\u6240\u6709\u58F0\u97F3","play drum %d.drum for %n beats":"\u5F39\u594F\u9F13\u58F0 %d.drum %n \u62CD","rest for %n beats":"\u4F11\u6B62 %n \u62CD","play note %d.note for %n beats":"\u5F39\u594F\u97F3\u7B26 %d.note %n \u62CD","set instrument to %d.instrument":"\u6F14\u594F\u4E50\u5668\u8BBE\u4E3A %d.instrument","change volume by %n":"\u5C06\u97F3\u91CF\u589E\u52A0 %n","set volume to %n%":"\u5C06\u97F3\u91CF\u8BBE\u5B9A\u4E3A %n","change tempo by %n":"\u5C06\u6F14\u594F\u901F\u5EA6\u52A0\u5FEB %n","set tempo to %n bpm":"\u5C06\u6F14\u594F\u901F\u5EA6\u8BBE\u5B9A\u4E3A %n bpm",clear:"\u6E05\u7A7A",stamp:"\u56FE\u7AE0","pen down":"\u843D\u7B14","pen up":"\u62AC\u7B14","set pen color to %c":"\u5C06\u753B\u7B14\u989C\u8272\u8BBE\u5B9A\u4E3A %c","change pen color by %n":"\u5C06\u753B\u7B14\u989C\u8272\u589E\u52A0 %n","set pen color to %n":"\u5C06\u753B\u7B14\u989C\u8272\u8BBE\u5B9A\u4E3A %n","change pen shade by %n":"\u5C06\u753B\u7B14\u4EAE\u5EA6\u589E\u52A0 %n","set pen shade to %n":"\u5C06\u753B\u7B14\u4EAE\u5EA6\u8BBE\u5B9A\u4E3A %n","change pen size by %n":"\u5C06\u753B\u7B14\u7C97\u7EC6\u589E\u52A0 %n","set pen size to %n":"\u5C06\u753B\u7B14\u7C97\u7EC6\u8BBE\u5B9A\u4E3A %n","when @greenFlag clicked":"\u5F53 @greenFlag \u88AB\u70B9\u51FB","when %m.key key pressed":"\u5F53\u6309\u4E0B %m.key \u952E","when this sprite clicked":"\u5F53\u89D2\u8272\u88AB\u70B9\u51FB\u65F6","when backdrop switches to %m.backdrop":"\u5F53\u80CC\u666F\u5207\u6362\u5230 %m.backdrop","when %m.triggerSensor > %n":"\u5F53 %m.triggerSensor > %n","when I receive %m.broadcast":"\u5F53\u63A5\u6536\u5230 %m.broadcast","broadcast %m.broadcast":"\u5E7F\u64AD %m.broadcast","broadcast %m.broadcast and wait":"\u5E7F\u64AD %m.broadcast \u5E76\u7B49\u5F85","wait %n secs":"\u7B49\u5F85 %n \u79D2","repeat %n":"\u91CD\u590D\u6267\u884C %n \u6B21",forever:"\u91CD\u590D\u6267\u884C","if %b then":"\u5982\u679C %b \u90A3\u4E48","wait until %b":"\u5728 %b \u4E4B\u524D\u4E00\u76F4\u7B49\u5F85","repeat until %b":"\u91CD\u590D\u6267\u884C\u76F4\u5230 %b","stop %m.stop":"\u505C\u6B62 %m.stop","when I start as a clone":"\u5F53\u4F5C\u4E3A\u514B\u9686\u4F53\u542F\u52A8\u65F6","create clone of %m.spriteOnly":"\u514B\u9686 %m.spriteOnly","delete this clone":"\u5220\u9664\u672C\u514B\u9686\u4F53","ask %s and wait":"\u8BE2\u95EE %s \u5E76\u7B49\u5F85","turn video %m.videoState":"\u5C06\u6444\u50CF\u5934 %m.videoState","set video transparency to %n%":"\u5C06\u89C6\u9891\u900F\u660E\u5EA6\u8BBE\u7F6E\u4E3A %n%","reset timer":"\u8BA1\u65F6\u5668\u5F52\u96F6","set %m.var to %s":"\u5C06 %m.var \u8BBE\u5B9A\u4E3A %s","change %m.var by %n":"\u5C06 %m.var \u589E\u52A0 %n","show variable %m.var":"\u663E\u793A\u53D8\u91CF %m.var","hide variable %m.var":"\u9690\u85CF\u53D8\u91CF %m.var","add %s to %m.list":"\u5C06 %s \u52A0\u5230 %m.list ","delete %d.listDeleteItem of %m.list":"\u5220\u9664\u7B2C %d.listDeleteItem \u9879\u4E8E %m.list ","if on edge, bounce":"\u78B0\u5230\u8FB9\u7F18\u5C31\u53CD\u5F39","insert %s at %d.listItem of %m.list":"\u63D2\u5165 %s \u4E3A\u7B2C %d.listItem \u9879\u4E8E %m.list  ","replace item %d.listItem of %m.list with %s":"\u66FF\u6362\u7B2C %d.listItem \u9879\u4E8E %m.list \u4E3A %s","show list %m.list":"\u663E\u793A\u5217\u8868 %m.list","hide list %m.list":"\u9690\u85CF\u5217\u8868 %m.list","x position":"x \u5750\u6807","y position":"y \u5750\u6807",direction:"\u65B9\u5411","costume #":"\u9020\u578B\u7F16\u53F7",size:"\u5927\u5C0F","backdrop name":"\u80CC\u666F\u540D\u79F0","backdrop #":"\u80CC\u666F\u7F16\u53F7",volume:"\u97F3\u91CF",tempo:"\u6F14\u594F\u901F\u5EA6","touching %m.touching?":"\u78B0\u5230 %m.touching?","touching color %c?":"\u78B0\u5230\u989C\u8272 %c?","color %c is touching %c?":"\u989C\u8272 %c \u78B0\u5230 %c?","distance to %m.spriteOrMouse":"\u5230 %m.spriteOrMouse \u7684\u8DDD\u79BB",answer:"\u56DE\u7B54","key %m.key pressed?":"\u6309\u952E %m.key \u662F\u5426\u6309\u4E0B\uFF1F","mouse down?":"\u9F20\u6807\u952E\u88AB\u6309\u4E0B\uFF1F","mouse x":"\u9F20\u6807\u7684x\u5750\u6807","mouse y":"\u9F20\u6807\u7684y\u5750\u6807",loudness:"\u54CD\u5EA6","video %m.videoMotionType on %m.stageOrThis":"\u89C6\u9891 %m.videoMotionType \u5BF9\u4E8E %m.stageOrThis",timer:"\u8BA1\u65F6\u5668","%m.attribute of %m.spriteOrStage":"%m.attribute \u5BF9\u4E8E %m.spriteOrStage ","current %m.timeAndDate":"\u76EE\u524D\u65F6\u95F4\u7684 %m.timeAndDate","days since 2000":"\u81EA2000\u5E74\u81F3\u4ECA\u7684\u5929\u6570",username:"\u7528\u6237\u540D","pick random %n to %n":"\u5728 %n \u5230 %n \u95F4\u968F\u673A\u9009\u4E00\u4E2A\u6570","%b and %b":"%b \u4E0E %b","%b or %b":"%b \u6216 %b","not %b":"%b \u4E0D\u6210\u7ACB","join %s %s":"\u8FDE\u63A5 %s \u548C %s","letter %n of %s":"\u7B2C %n \u4E2A\u5B57\u7B26\uFF1A %s","length of %s":"%s \u7684\u957F\u5EA6","%n mod %n":"%n \u9664\u4EE5 %n \u7684\u4F59\u6570","round %n":"\u5C06 %n \u56DB\u820D\u4E94\u5165","%m.mathOp of %n":"%m.mathOp %n","item %d.listItem of %m.list":"\u7B2C %d.listItem \u9879\u4E8E %m.list","length of %m.list":"%m.list \u7684\u9879\u76EE\u6570","%m.list contains %s?":"%m.list \u5305\u542B %s?","when %m.booleanSensor":"\u5F53 %m.booleanSensor","when %m.sensor %m.lessMore %n":"\u5F53 %m.sensor %m.lessMore %n","sensor %m.booleanSensor?":"\u4F20\u611F\u5668 %m.booleanSensor\uFF1F","%m.sensor sensor value":"%m.sensor \u4F20\u611F\u5668\u7684\u503C","turn %m.motor on for %n secs":"\u542F\u52A8 %m.motor \u9A6C\u8FBE %n \u79D2","turn %m.motor on":"\u5F00\u542F %m.motor","turn %m.motor off":"\u5173\u95ED %m.motor","set %m.motor power to %n":"\u5C06\u9A6C\u8FBE %m.motor \u529F\u7387\u8BBE\u5B9A\u4E3A %n","set %m.motor2 direction to %m.motorDirection":"\u5C06\u9A6C\u8FBE %m.motor2 \u65B9\u5411\u8BBE\u5B9A\u4E3A %m.motorDirection","when distance %m.lessMore %n":"\u5F53\u8DDD\u79BB %m.lessMore %n","when tilt %m.eNe %n":"\u5F53\u503E\u89D2 %m.eNe %n",distance:"\u8DDD\u79BB",tilt:"\u503E\u659C",else:"\u5426\u5219"},c=["\u5F53\u8DDD\u79BBundefined"],d={"A connected":"A \u5DF2\u8FDE\u63A5",all:"\u5168\u90E8","all around":"\u4EFB\u610F","B connected":"B \u5DF2\u8FDE\u63A5",brightness:"\u4EAE\u5EA6","button pressed":"\u6309\u94AE\u88AB\u6309\u4E0B","C connected":"C \u5DF2\u8FDE\u63A5",color:"\u989C\u8272","costume name":"\u9020\u578B\u540D\u79F0","D connected":"D \u5DF2\u8FDE\u63A5",date:"\u65E5","day of week":"\u5468","don't rotate":"\u4E0D\u65CB\u8F6C","down arrow":"\u4E0B\u79FB\u952E",edge:"\u8FB9\u7F18",fisheye:"\u9C7C\u773C",ghost:"\u865A\u50CF",hour:"\u65F6","left arrow":"\u5DE6\u79FB\u952E","left-right":"\u5DE6-\u53F3\u7FFB\u8F6C",light:"\u5149\u7EBF",minute:"\u5206",month:"\u6708",mosaic:"\u9A6C\u8D5B\u514B",motion:"\u52A8\u4F5C","mouse-pointer":"\u9F20\u6807\u6307\u9488",myself:"\u81EA\u5DF1",off:"\u5173\u95ED",on:"\u5F00\u542F","on-flipped":"\u4EE5\u5DE6\u53F3\u7FFB\u8F6C\u6A21\u5F0F\u5F00\u542F","other scripts in sprite":"\u89D2\u8272\u7684\u5176\u4ED6\u811A\u672C",pixelate:"\u50CF\u7D20\u5316","previous backdrop":"\u4E0A\u4E00\u4E2A\u80CC\u666F","random position":"\u968F\u673A\u4F4D\u7F6E","resistance-A":"\u963B\u529B-A","resistance-B":"\u963B\u529B-B","resistance-C":"\u963B\u529B-C","resistance-D":"\u963B\u529B-D",reverse:"\u53CD\u8F6C","right arrow":"\u53F3\u79FB\u952E",second:"\u79D2",slider:"\u6ED1\u6746",sound:"\u58F0\u97F3",space:"\u7A7A\u683C",Stage:"\u821E\u53F0","that way":"\u5411\u5DE6\u8F6C","this script":"\u5F53\u524D\u811A\u672C","this sprite":"\u5F53\u524D\u89D2\u8272","this way":"\u5411\u53F3\u8F6C","up arrow":"\u4E0A\u79FB\u952E","video motion":"\u89C6\u9891\u79FB\u52A8",whirl:"\u65CB\u8F6C",year:"\u5E74"},e=["\u89D2\u8272\u7684\u5176\u4ED6\u811A\u672C","\u821E\u53F0\u4E0A\u7684\u5176\u4ED6\u811A\u672C"],f=["\u5B9A\u4E49"],g={Motion:"\u8FD0\u52A8",Looks:"\u5916\u89C2",Sound:"\u58F0\u97F3",Pen:"\u753B\u7B14",Data:"\u6570\u636E",variable:"\u53D8\u91CF",list:"\u5217\u8868",Events:"\u4E8B\u4EF6",Control:"\u63A7\u5236",Sensing:"\u4FA6\u6D4B",Operators:"\u8FD0\u7B97","More Blocks":"\u66F4\u591A\u79EF\u6728",Tips:"\u63D0\u793A"},h=["\u7EDD\u5BF9\u503C","\u5411\u4E0B\u53D6\u6574","\u5411\u4E0A\u53D6\u6574","\u5E73\u65B9\u6839"],i={"左转 %n 度":"turn @turnLeft %n degrees","右转 %n 度":"turn @turnRight %n degrees",点击绿旗时:"when @greenFlag clicked",结束:"end"},j="\u7B80\u4F53\u4E2D\u6587",k=Object.freeze({commands:b,ignorelt:c,dropdowns:d,osis:e,define:f,palette:g,math:h,aliases:i,_name:j,default:{commands:b,ignorelt:c,dropdowns:d,osis:e,define:f,palette:g,math:h,aliases:i,_name:j}}),l=function(a){return a&&a["default"]||a}(k);window.scratchblocks.loadLanguages({zh_CN:l});return a.default={},a}({});

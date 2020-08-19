//The following information is the output of the alt1.helpIntelliSense() function.

window.alt1={
    //No info available about this property.
    overlay:undefined,
    //Gets the left bound of all screens, usually 0, but can be negative with multiple screens.
    screenX:undefined,
    //Gets the Top bound of all screens, usually 0, but can be negative with multiple screens.
    screenY:undefined,
    //Gets the width of the union of all srceens.
    screenWidth:undefined,
    //Gets the height of the union of all srceens.
    screenHeight:undefined,
    //Gets a string represention of the current version of Alt1.
    version:undefined,
    //Gets a integer that represents the current version. (major * 1000 * 1000 + minor * 1000 + build) 1.2.3 -> 1002003.
    versionint:undefined,
    //Gets the maximum amount of bytes that can be transfered in a single function call. The wrapper library uses this to split up large image transfers.
    maxtransfer:undefined,
    //Gets the name of the current skin.
    skinName:undefined,
    //Gets what capture methods is currently being used
    captureMethod:undefined,
    //Gets the adviced minimum time between screen captures
    captureInterval:undefined,
    //Gets the X-coord of the runescape client area when rs is linked. Use rsLinked to determine if rs is linked.
    rsX:undefined,
    //Gets the Y-coord of the runescape client area when rs is linked. Use rsLinked to determine if rs is linked.
    rsY:undefined,
    //Gets the width of the runescape client area when rs is linked. Use rsLinked to determine if rs is linked.
    rsWidth:undefined,
    //Gets the height of the runescape client area when rs is linked. Use rsLinked to determine if rs is linked.
    rsHeight:undefined,
    //Gets the DPI scaling level of the rs window in windows 8.1 or 10, returns 0 when the rs window is not linked.
    rsScaling:undefined,
    //Gets if the runescape window is currently detected by Alt1.
    rsLinked:undefined,
    //Gets if the current page is handled as an installed app.
    permissionInstalled:undefined,
    //Gets is the current page has gamestate permission.
    permissionGameState:undefined,
    //Gets is the current page has overlay permission.
    permissionOverlay:undefined,
    //Gets is the current page has pixel permission
    permissionPixel:undefined,
    //Gets the position of the mouse is it is inside the runescape client, use a1lib.mousePosition() for an object with {x,y}. (x=r>>16, y=r&0xFFFF)
    //[Gamestate] permission required.
    mousePosition:undefined,
    //Returns wether the runescape window is currently the active window.
    //[Gamestate] permission required.
    rsActive:undefined,
    //Gets the time in milliseconds since the last click in the runescape window.
    //[Gamestate] permission required.
    rsLastActive:undefined,
    //Gets the timestamp of the last world hop recorded by Alt1.
    //[Gamestate] permission required.
    lastWorldHop:undefined,
    //Gets the current world that the player is logged in to. Returns -1 when the player is not logged in or in the lobby. Some times also returns -1 on world with weird proxy setups (aus)
    //[Gamestate] permission required.
    currentWorld:undefined,
    //Gets the ping of the current connected game server.
    //[Gamestate] permission required.
    rsPing:undefined,
    //Returns the detected fps of runescape
    //[Gamestate] permission required.
    rsFps:undefined,
    //Gets information about how the app was opened, this includes the recognised text and regex matches if opened by pressing alt+1.
    //[Installed] permission required.
    openInfo:undefined,
    }
    
    alt1.userResize=function(left,top,right,bottom){
    ///<summary>
    ///This function simulates the user starting to drag the frame border. You can use this to add useable control area to the app.
    ///</summary>
    ///<parameter name="left" type="Boolean">Boolean</parameter>
    ///<parameter name="top" type="Boolean">Boolean</parameter>
    ///<parameter name="right" type="Boolean">Boolean</parameter>
    ///<parameter name="bottom" type="Boolean">Boolean</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.identifyAppUrl=function(url){
    ///<summary>
    ///Tells Alt1 to fetch identification information from the given url. The file should contain a json encoded object with properties about the app.Most importantly it should have a configUrl property that links to itself and a appUrl property that links to the starting page of the app.There is a full appconfig in the example app.
    ///</summary>
    ///<parameter name="url" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.openBrowser=function(url){
    ///<summary>
    ///Opens the specified link in the default browser.
    ///</summary>
    ///<parameter name="url" type="String">String</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.clearTooltip=function(){
    ///<summary>
    ///Removes the tooltip.<br/>
    ///[Installed] permission required.
    ///</summary>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.clearBinds=function(){
    ///<summary>
    ///Cleans up all tasks for this app on Alt1, it stops pixel event listeners and removes possible cursor tooltips.<br/>
    ///[Installed] permission required.
    ///</summary>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.registerStatusDaemon=function(serverUrl,state){
    ///<summary>
    ///Sets the status daemon of this app. The given server url is called periodicly with a POST request containing with the state string.The server should respond with a json object that contains the following properties:
    ///string state - the state string to use for the next request.int nextRun - time in milliseconds until the next run.Alert[] alerts - an array containing alerts: {string title, string body}Status[] status - an array containing the status: {string status}<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="serverUrl" type="String">String</parameter>
    ///<parameter name="state" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.getStatusDaemonState=function(){
    ///<summary>
    ///Returns the current state string of the status daemon of ths app.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.showNotification=function(title,message,icon){
    ///<summary>
    ///Shows a notification with the given title and message. The icon argument is reserved and ignored, you should pass an empty string.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="title" type="String">String</parameter>
    ///<parameter name="message" type="String">String</parameter>
    ///<parameter name="icon" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.closeApp=function(){
    ///<summary>
    ///Closes the app<br/>
    ///[Installed] permission required.
    ///</summary>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.setTooltip=function(tooltip){
    ///<summary>
    ///Sets a tooltip with specified text that chases the cursor. It can be removed by calling this function again with an empty string or using the clearTooltip function.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="tooltip" type="String">String</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.SetTaskbarProgress=function(type,progress){
    ///<summary>
    ///Changes the Runescape window in the task bar to show a progress bar. Type is the type of bar - 0: reset/normal, 1: in progress, 2: error (red bar), 3: unknown (animated bar), 4: paused (orange bar). Progress is the size of the bar. (0-100)<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="type" type="Int32">Int32</parameter>
    ///<parameter name="progress" type="Double">Double</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.setTitleBarText=function(text){
    ///<summary>
    ///Adds a string to the title bar of the rs client. There can only be one per app and you can clear it by calling this function again with an empty string.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="text" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLayRect=function(color,x,y,w,h,time,lineWidth){
    ///<summary>
    ///Overlays a rectangle on the screen. Color is a 8bpp rgba int which can be created using the mixcolor function in the library. Time is in milliseconds.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="color" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<parameter name="time" type="Int32">Int32</parameter>
    ///<parameter name="lineWidth" type="Int32">Int32</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.overLayText=function(str,color,size,x,y,time){
    ///<summary>
    ///Overlays some text on the screen. Color is a 8bpp rgba int which can be created using the mixcolor function in the library. Time is in milliseconds.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="str" type="String">String</parameter>
    ///<parameter name="color" type="Int32">Int32</parameter>
    ///<parameter name="size" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="time" type="Int32">Int32</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.overLayTextEx=function(str,color,size,x,y,time,fontname,centered,shadow){
    ///<summary>
    ///Overlays some text, with extra options. Centered centers the text horizontally and vertically. Fontname is the name of the font to use, the default sans-serif font is used if this font can not be found.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="str" type="String">String</parameter>
    ///<parameter name="color" type="Int32">Int32</parameter>
    ///<parameter name="size" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="time" type="Int32">Int32</parameter>
    ///<parameter name="fontname" type="String">String</parameter>
    ///<parameter name="centered" type="Boolean">Boolean</parameter>
    ///<parameter name="shadow" type="Boolean">Boolean</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.overLayLine=function(color,width,x1,y1,x2,y2,time){
    ///<summary>
    ///Overlays a line on the screen. Color is a 8bpp rgba int which can be created using the mixcolor function in the library. Time is in milliseconds.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="color" type="Int32">Int32</parameter>
    ///<parameter name="width" type="Int32">Int32</parameter>
    ///<parameter name="x1" type="Int32">Int32</parameter>
    ///<parameter name="y1" type="Int32">Int32</parameter>
    ///<parameter name="x2" type="Int32">Int32</parameter>
    ///<parameter name="y2" type="Int32">Int32</parameter>
    ///<parameter name="time" type="Int32">Int32</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.overLayImage=function(x,y,imgstr,imgwidth,time){
    ///<summary>
    ///[Internal, use alt1lib] Overlays an image on the screen. imgstr is a base64 encoded 8bpp bgra image buffer. imgwidth is the width of the image, this is required to decode the image.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="imgstr" type="String">String</parameter>
    ///<parameter name="imgwidth" type="Int32">Int32</parameter>
    ///<parameter name="time" type="Int32">Int32</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.overLayClearGroup=function(group){
    ///<summary>
    ///Removes all overlay with given group name from screen. You can give overlays a group by calling the overlaySetGroup function before drawing<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="group" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLaySetGroup=function(group){
    ///<summary>
    ///Set the group name of all following draw overlay calls untill called again with a different name. Groups can be used remove overlays again.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="group" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLayFreezeGroup=function(group){
    ///<summary>
    ///Stops all overlays in the current group from updating. You can use this to draw combined overlays without flickering. Call overLayContinueGroup when done to continue normal drawing, or overLayRefreshGroup to only redraw the overlay when specificly called. Frozen overlays have an extended timer, but still not unlimited.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="group" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLayContinueGroup=function(group){
    ///<summary>
    ///Continues automatic redrawing of this overlay group.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="group" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLayRefreshGroup=function(group){
    ///<summary>
    ///Does a single redraw of the current overlay group while leaving the group frozen.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="group" type="String">String</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.overLaySetGroupZIndex=function(groupname,zIndex){
    ///<summary>
    ///Sets the z-index for an overlay group. Group with higher z-index are drawn over lower ones. The default value is 0.<br/>
    ///[Overlay] permission required.
    ///</summary>
    ///<parameter name="groupname" type="String">String</parameter>
    ///<parameter name="zIndex" type="Int32">Int32</parameter>
    ///<returns type="System.Void">System.Void</returns>
    };
    alt1.getRegion=function(x,y,w,h){
    ///<summary>
    ///[Internal, use alt1lib] Returns a string containing pixel data about the specified region inside the rs window. The string is base64 encoded 8bpp argb buffer of the requested image.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.getRegionMulti=function(rectsjson){
    ///<summary>
    ///[Internal, use alt1lib] Returns a string containing pixel data about the specified regions inside the rs window. The string is base64 encoded 8bpp argb buffer of the requested images concatenated after eachother.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="rectsjson" type="String">String</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.bindRegion=function(x,y,w,h){
    ///<summary>
    ///[Internal, use alt1lib] Binds a region of the rs window in memory to apply functions to it without having to transfer it to the browser. Returns a non-zero integer on success or 0 on failure. This function returns a identifier to be used in subsequent 'bind-' calls. This id is currently always 1 on succes as only one bound image is allowed.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<returns type="System.Int32">System.Int32</returns>
    };
    alt1.bindScreenRegion=function(x,y,w,h){
    ///<summary>
    ///[Internal, use alt1lib] Same as bindRegion, but uses screen coordinates and can see pixels outside of rs. This method is much slower per call.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<returns type="System.Int32">System.Int32</returns>
    };
    alt1.bindGetRegion=function(id,x,y,w,h){
    ///<summary>
    ///[Internal, use alt1lib] Returns a rubregion of the bound image as base64 encoded 8bpp abgr buffer.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.bindReadString=function(id,fontname,x,y){
    ///<summary>
    ///Tries to read a antialised string on the bound image, with the given font. The color of text will be detected and chosen from a set of preset colors. Valid font names are currently 'chat','chatmono' and 'xpcounter'. This function returns an empty string on failure.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="fontname" type="String">String</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.bindReadColorString=function(id,fontname,color,x,y){
    ///<summary>
    ///Same as bindReadString, however requires an extra color argument. The color is a 8bpp rgba color int that can be mixed with the a1lib.mixcolor function. The should be the base color, or brightest color in the to be detected text.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="fontname" type="String">String</parameter>
    ///<parameter name="color" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.bindReadStringEx=function(id,x,y,args){
    ///<summary>
    ///Same as bindReadString, however allows extra arguments in an object. Possible arguments and default values:<br/>
    ///bool allowgap=false - scan empty space for more text after reading text<br/>
    ///string fontname=chatfont - the font to detect<br/>
    ///int[] colors=[~20 standard colors] - array of color ints to detect<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="args" type="String">String</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.addOCRFont=function(name,jsonFont){
    ///<summary>
    ///[Incomplete] Adds a font for ocr, this font can be used in the bindReadString functions. The jsonfont can be generated from an image using a generator, please contant me if you plan to use this.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="name" type="String">String</parameter>
    ///<parameter name="jsonFont" type="String">String</parameter>
    ///<returns type="System.Boolean">System.Boolean</returns>
    };
    alt1.bindReadRightClickString=function(id,x,y){
    ///<summary>
    ///Reads rightlcick menu text, this function is very fragile and is different from the other readText functions. It requires an exact baseline y coord.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.bindGetPixel=function(id,x,y){
    ///<summary>
    ///Retrieves a single pixel from the bound image, this is not a recommended method as it is very slow<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<returns type="System.Int32">System.Int32</returns>
    };
    alt1.bindFindSubImg=function(id,imgstr,imgwidth,x,y,w,h){
    ///<summary>
    ///[Internal, use alt1lib] Finds the given subimage in the bound image. This function is way quicker than possible in js. imgstr is a base64 encoded 8bpp bgra image buffer. imgwidth is the width of the image, this is required to decode the image. x,y,w,h defines the area in the bound image to be searched.<br/>
    ///[Pixel] permission required.
    ///</summary>
    ///<parameter name="id" type="Int32">Int32</parameter>
    ///<parameter name="imgstr" type="String">String</parameter>
    ///<parameter name="imgwidth" type="Int32">Int32</parameter>
    ///<parameter name="x" type="Int32">Int32</parameter>
    ///<parameter name="y" type="Int32">Int32</parameter>
    ///<parameter name="w" type="Int32">Int32</parameter>
    ///<parameter name="h" type="Int32">Int32</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.help=function(){
    ///<summary>
    ///Simple info about how the API works.
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.helpProp=function(propname){
    ///<summary>
    ///This function returns information about a single property with the given name.
    ///</summary>
    ///<parameter name="propname" type="String">String</parameter>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.helpFull=function(){
    ///<summary>
    ///Returns a html document with documentation about every function and property exposed.
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.helpIntelliSense=function(){
    ///<summary>
    ///Returns a file that can be used to add the alt1 api to Visual Studio IntelliSense.
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.helpTypescript=function(){
    ///<summary>
    ///Returns a types.d.ts file that represents the alt1 api and can be used to get working code completion in typescript.
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.helpJSDoc=function(){
    ///<summary>
    ///Returns a file that can be used to add the alt1 api to editors using the JSDoc format
    ///</summary>
    ///<returns type="System.String">System.String</returns>
    };
    alt1.GetType=function(){
    ///<summary>
    ///No info available about this method.
    ///</summary>
    ///<returns type="System.Type">System.Type</returns>
    };
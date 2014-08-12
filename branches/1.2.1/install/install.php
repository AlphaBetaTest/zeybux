<?php $lEntete = "
<html>
	<head>
		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>
		<title>Zeybux 1.0 - Outil de gestion du Zeybu - Installation</title>
		
		<style type=\"text/css\">
/*
* jQuery UI CSS Framework
* Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Lucida%20Grande,%20Lucida%20Sans,%20Arial,%20sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=10px&bgColorHeader=3a8104&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=33&borderColorHeader=3f7506&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=285c00&bgTextureContent=05_inset_soft.png&bgImgOpacityContent=10&borderColorContent=72b42d&fcContent=ffffff&iconColorContent=72b42d&bgColorDefault=4ca20b&bgTextureDefault=03_highlight_soft.png&bgImgOpacityDefault=60&borderColorDefault=45930b&fcDefault=ffffff&iconColorDefault=ffffff&bgColorHover=4eb305&bgTextureHover=03_highlight_soft.png&bgImgOpacityHover=50&borderColorHover=8bd83b&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=285c00&bgTextureActive=04_highlight_hard.png&bgImgOpacityActive=30&borderColorActive=72b42d&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=fbf5d0&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=f9dd34&fcHighlight=363636&iconColorHighlight=4eb305&bgColorError=ffdc2e&bgTextureError=08_diagonals_thick.png&bgImgOpacityError=95&borderColorError=fad000&fcError=2b2b2b&iconColorError=cd0a0a&bgColorOverlay=444444&bgTextureOverlay=08_diagonals_thick.png&bgImgOpacityOverlay=15&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=07_diagonals_small.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=0px&offsetTopShadow=4px&offsetLeftShadow=4px&cornerRadiusShadow=4px
*/


/* Component containers
----------------------------------*/
.ui-widget { font-family: 'Ubuntu',Lucida Grande, Lucida Sans, Arial, sans-serif; font-size: 1.1em; }
.ui-widget .ui-widget { font-size: 1em; }
.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: 'Ubuntu',Lucida Grande, Lucida Sans, Arial, sans-serif; font-size: 1em; }
.ui-widget-content { border: 1px solid #72b42d; background: #285c00 url(images/ui-bg_inset-soft_10_285c00_1x100.png) 50% bottom repeat-x; color: #ffffff; }
.ui-widget-content a { color: #ffffff; }
.ui-widget-header { border: 1px solid #3f7506; background: #3a8104 url(images/ui-bg_highlight-soft_33_3a8104_1x100.png) 50% 50% repeat-x; color: #ffffff; font-weight: bold; }
.ui-widget-header a { color: #ffffff; }

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight {border: 1px solid #f9dd34; background: #fbf5d0 url(images/ui-bg_glass_55_fbf5d0_1x400.png) 50% 50% repeat-x; color: #363636; }
.ui-state-highlight a, .ui-widget-content .ui-state-highlight a { color: #363636; }
.ui-state-error, .ui-widget-content .ui-state-error {border: 1px solid #fad000; background: #ffdc2e url(images/ui-bg_diagonals-thick_95_ffdc2e_40x40.png) 50% 50% repeat; color: #2b2b2b; }
.ui-state-error a, .ui-widget-content .ui-state-error a { color: #2b2b2b; }
.ui-state-error-text, .ui-widget-content .ui-state-error-text { color: #2b2b2b; }
.ui-priority-primary, .ui-widget-content .ui-priority-primary { font-weight: bold; }
.ui-priority-secondary, .ui-widget-content .ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; }
.ui-state-disabled, .ui-widget-content .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; }

.ui-corner-all { -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; }

/* Button
----------------------------------*/

.ui-button { display: inline-block; position: relative; padding: 0; margin-right: .1em; text-decoration: none !important; cursor: pointer; text-align: center; zoom: 1; overflow: visible; } /* the overflow property removes extra width in IE */

/*button text element */
.ui-button .ui-button-text { display: block; line-height: 1.4;  }
.ui-button-text-only .ui-button-text { padding: .4em 1em; }
.ui-button-icon-only .ui-button-text, .ui-button-icons-only .ui-button-text { padding: .4em; text-indent: -9999999px; }
.ui-button-text-icon .ui-button-text, .ui-button-text-icons .ui-button-text { padding: .4em 1em .4em 2.1em; }
.ui-button-text-icons .ui-button-text { padding-left: 2.1em; padding-right: 2.1em; }
/* no icon support for input elements, provide padding by default */
input.ui-button { padding: .4em 1em; }



body {
	background-color:#BBFF55; 
	font-family: 'Ubuntu',Lucida Grande, Lucida Sans, Arial, sans-serif;
}

#site {
	position:absolute;
	width:1000px;
	top:0;
	left:50%;
	margin-left:-500px;
	background-color:#79c42d; 
	background-repeat:no-repeat;
	min-height:600px;
	padding-bottom:30px;
	border:7px solid #b5f256;
}

h2 {
	font-style:italic;
	margin:0;
	padding-bottom:20px;
	padding-top:10px;	
	text-align:center;
	color:#285c00;
	background:rgba(121,196,145,0.2);
	border-bottom:1px solid green;
}

#formulaire, #formulaire-bdd, #formulaire-caisse {
    margin-left: 320px;
    margin-top: 150px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    width: 360px;
}

#formulaire-bdd, #formulaire-caisse {
    margin-left: 260px;
    width: 420px;
}

#formulaire-caisse {
	margin-top: 15px;
}

.center {
text-align:center;
}

.ui-widget-header {
padding:2px;
text-align:center;
margin:5px;
}

.ui-state-highlight {
padding:3px;
margin:10px;
}
	
table {
color:#FFFFFF;
}		
		</style>
	</head>
	<body>
		<div id=\"site\" class=\"ui-corner-all\">\n";

	if(!isset($_GET["page"])) {
		echo $lEntete;
?>
		<h2>Étape 1 : Répertoire d'installation</h2>
		<div id="formulaire" class="ui-widget ui-widget-content ui-corner-all">
			<div class="ui-widget ui-widget-header ui-corner-all">Répertoire d'installation</div>
			<div class="ui-state-highlight">Laisser vide pour le répertoire courrant</div>		
			<form action="./install.php?page=2" method="post">
				<input type="text" name="rep" id="rep"/>
				<input type="submit" value="Valider" class="ui-button" />
			</form>
		</div>
<?php 
	} else if($_GET["page"] == 2) {
		
		if(isset($_POST['rep'])) {
			/********************* PCL ERROR ***********************/
			
			// --------------------------------------------------------------------------------
			// PhpConcept Library (PCL) Error 1.0
			// --------------------------------------------------------------------------------
			// License GNU/GPL - Vincent Blavet - Mars 2001
			// http://www.phpconcept.net & http://phpconcept.free.fr
			// --------------------------------------------------------------------------------
			// Fran�ais :
			//   La description de l'usage de la librairie PCL Error 1.0 n'est pas encore
			//   disponible. Celle-ci n'est pour le moment distribu�e qu'avec les
			//   d�veloppements applicatifs de PhpConcept.
			//   Une version ind�pendante sera bientot disponible sur http://www.phpconcept.net
			//
			// English :
			//   The PCL Error 1.0 library description is not available yet. This library is
			//   released only with PhpConcept application and libraries.
			//   An independant release will be soon available on http://www.phpconcept.net
			//
			// --------------------------------------------------------------------------------
			//
			//   * Avertissement :
			//
			//   Cette librairie a �t� cr��e de fa�on non professionnelle.
			//   Son usage est au risque et p�ril de celui qui l'utilise, en aucun cas l'auteur
			//   de ce code ne pourra �tre tenu pour responsable des �ventuels d�gats qu'il pourrait
			//   engendrer.
			//   Il est entendu cependant que l'auteur a r�alis� ce code par plaisir et n'y a
			//   cach� aucun virus, ni malveillance.
			//   Cette libairie est distribu�e sous la license GNU/GPL (http://www.gnu.org)
			//
			//   * Auteur :
			//
			//   Ce code a �t� �crit par Vincent Blavet (vincent@blavet.net) sur son temps
			//   de loisir.
			//
			// --------------------------------------------------------------------------------
			
			// ----- Look for double include
			if (!defined("PCLERROR_LIB"))
			{
			  define( "PCLERROR_LIB", 1 );
			
			  // ----- Version
			  $g_pcl_error_version = "1.0";
			
			  // ----- Internal variables
			  // These values must only be change by PclError library functions
			  $g_pcl_error_string = "";
			  $g_pcl_error_code = 1;
			
			
			  // --------------------------------------------------------------------------------
			  // Function : PclErrorLog()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclErrorLog($p_error_code=0, $p_error_string="")
			  {
			    global $g_pcl_error_string;
			    global $g_pcl_error_code;
			
			    $g_pcl_error_code = $p_error_code;
			    $g_pcl_error_string = $p_error_string;
			
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclErrorFatal()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclErrorFatal($p_file, $p_line, $p_error_string="")
			  {
			    global $g_pcl_error_string;
			    global $g_pcl_error_code;
			
			    $v_message =  "<html><body>";
			    $v_message .= "<p align=center><font color=red bgcolor=white><b>PclError Library has detected a fatal error on file '$p_file', line $p_line</b></font></p>";
			    $v_message .= "<p align=center><font color=red bgcolor=white><b>$p_error_string</b></font></p>";
			    $v_message .= "</body></html>";
			    die($v_message);
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclErrorReset()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclErrorReset()
			  {
			    global $g_pcl_error_string;
			    global $g_pcl_error_code;
			
			    $g_pcl_error_code = 1;
			    $g_pcl_error_string = "";
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclErrorCode()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclErrorCode()
			  {
			    global $g_pcl_error_string;
			    global $g_pcl_error_code;
			    
			    return($g_pcl_error_code);
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclErrorString()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclErrorString()
			  {
			    global $g_pcl_error_string;
			    global $g_pcl_error_code;
			
			    return($g_pcl_error_string." [code $g_pcl_error_code]");
			  }
			  // --------------------------------------------------------------------------------
			
			
			// ----- End of double include look
			}

			/********************* Fin PCL ERROR ***********************/
			
			/********************* PCL TRACE ***********************/
			// --------------------------------------------------------------------------------
			// PhpConcept Library (PCL) Trace 1.0
			// --------------------------------------------------------------------------------
			// License GNU/GPL - Vincent Blavet - Janvier 2001
			// http://www.phpconcept.net & http://phpconcept.free.fr
			// --------------------------------------------------------------------------------
			// Fran�ais :
			//   La description de l'usage de la librairie PCL Trace 1.0 n'est pas encore
			//   disponible. Celle-ci n'est pour le moment distribu�e qu'avec l'application
			//   et la librairie PhpZip.
			//   Une version ind�pendante sera bientot disponible sur http://www.phpconcept.net
			//
			// English :
			//   The PCL Trace 1.0 library description is not available yet. This library is
			//   released only with PhpZip application and library.
			//   An independant release will be soon available on http://www.phpconcept.net
			//
			// --------------------------------------------------------------------------------
			//
			//   * Avertissement :
			//
			//   Cette librairie a �t� cr��e de fa�on non professionnelle.
			//   Son usage est au risque et p�ril de celui qui l'utilise, en aucun cas l'auteur
			//   de ce code ne pourra �tre tenu pour responsable des �ventuels d�gats qu'il pourrait
			//   engendrer.
			//   Il est entendu cependant que l'auteur a r�alis� ce code par plaisir et n'y a
			//   cach� aucun virus, ni malveillance.
			//   Cette libairie est distribu�e sous la license GNU/GPL (http://www.gnu.org)
			//
			//   * Auteur :
			//
			//   Ce code a �t� �crit par Vincent Blavet (vincent@blavet.net) sur son temps
			//   de loisir.
			//
			// --------------------------------------------------------------------------------
			
			// ----- Look for double include
			if (!defined("PCLTRACE_LIB"))
			{
			  define( "PCLTRACE_LIB", 1 );
			
			  // ----- Version
			  $g_pcl_trace_version = "1.0";
			
			  // ----- Internal variables
			  // These values must be change by PclTrace library functions
			  $g_pcl_trace_mode = "memory";
			  $g_pcl_trace_filename = "trace.txt";
			  $g_pcl_trace_name = array();
			  $g_pcl_trace_index = 0;
			  $g_pcl_trace_level = 0;
			  //$g_pcl_trace_entries = array();
			
			
			  // --------------------------------------------------------------------------------
			  // Function : TrOn($p_level, $p_mode, $p_filename)
			  // Description :
			  // Parameters :
			  //   $p_level : Trace level
			  //   $p_mode : Mode of trace displaying :
			  //             'normal' : messages are displayed at function call
			  //             'memory' : messages are memorized in a table and can be display by
			  //                        TrDisplay() function. (default)
			  //             'log'    : messages are writed in the file $p_filename
			  // --------------------------------------------------------------------------------
			  function TrOn($p_level=1, $p_mode="memory", $p_filename="trace.txt")
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Enable trace mode
			    $g_pcl_trace_level = $p_level;
			
			    // ----- Memorize mode and filename
			    switch ($p_mode) {
			      case "normal" :
			      case "memory" :
			      case "log" :
			        $g_pcl_trace_mode = $p_mode;
			      break;
			      default :
			        $g_pcl_trace_mode = "logged";
			    }
			
			    // ----- Memorize filename
			    $g_pcl_trace_filename = $p_filename;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : IsTrOn()
			  // Description :
			  // Return value :
			  //   The trace level (0 for disable).
			  // --------------------------------------------------------------------------------
			  function IsTrOn()
			  {
			    global $g_pcl_trace_level;
			
			    return($g_pcl_trace_level);
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : TrOff()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function TrOff()
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			
			    // ----- Clean
			    $g_pcl_trace_mode = "memory";
			    unset($g_pcl_trace_entries);
			    unset($g_pcl_trace_name);
			    unset($g_pcl_trace_index);
			
			    // ----- Switch off trace
			    $g_pcl_trace_level = 0;
			  }
			  // --------------------------------------------------------------------------------
			
			
			  // --------------------------------------------------------------------------------
			  // Function : TrFctStart()
			  // Description :
			  //   Just a trace function for debbugging purpose before I use a better tool !!!!
			  //   Start and stop of this function is by $g_pcl_trace_level global variable.
			  // Parameters :
			  //   $p_level : Level of trace required.
			  // --------------------------------------------------------------------------------
			  function TrFctStart($p_file, $p_line, $p_name, $p_param="", $p_message="")
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Look for disabled trace
			    if ($g_pcl_trace_level < 1)
			      return;
			
			    // ----- Add the function name in the list
			    if (!isset($g_pcl_trace_name))
			      $g_pcl_trace_name = $p_name;
			    else
			      $g_pcl_trace_name .= ",".$p_name;
			
			    // ----- Update the function entry
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = $p_name;
			    $g_pcl_trace_entries[$i]['param'] = $p_param;
			    $g_pcl_trace_entries[$i]['message'] = "";
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "1"; // means start of function
			
			    // ----- Update the message entry
			    if ($p_message != "")
			    {
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = "";
			    $g_pcl_trace_entries[$i]['param'] = "";
			    $g_pcl_trace_entries[$i]['message'] = $p_message;
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "3"; // means message
			    }
			
			    // ----- Action depending on mode
			    PclTraceAction($g_pcl_trace_entries[$i]);
			
			    // ----- Increment the index
			    $g_pcl_trace_index++;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : TrFctEnd()
			  // Description :
			  //   Just a trace function for debbugging purpose before I use a better tool !!!!
			  //   Start and stop of this function is by $g_pcl_trace_level global variable.
			  // Parameters :
			  //   $p_level : Level of trace required.
			  // --------------------------------------------------------------------------------
			  function TrFctEnd($p_file, $p_line, $p_return=1, $p_message="")
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Look for disabled trace
			    if ($g_pcl_trace_level < 1)
			      return;
			
			    // ----- Extract the function name in the list
			    // ----- Remove the function name in the list
			    if (!($v_name = strrchr($g_pcl_trace_name, ",")))
			    {
			      $v_name = $g_pcl_trace_name;
			      $g_pcl_trace_name = "";
			    }
			    else
			    {
			      $g_pcl_trace_name = substr($g_pcl_trace_name, 0, strlen($g_pcl_trace_name)-strlen($v_name));
			      $v_name = substr($v_name, -strlen($v_name)+1);
			    }
			
			    // ----- Decrement the index
			    $g_pcl_trace_index--;
			
			    // ----- Update the message entry
			    if ($p_message != "")
			    {
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = "";
			    $g_pcl_trace_entries[$i]['param'] = "";
			    $g_pcl_trace_entries[$i]['message'] = $p_message;
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "3"; // means message
			    }
			
			    // ----- Update the function entry
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = $v_name;
			    $g_pcl_trace_entries[$i]['param'] = $p_return;
			    $g_pcl_trace_entries[$i]['message'] = "";
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "2"; // means end of function
			
			    // ----- Action depending on mode
			    PclTraceAction($g_pcl_trace_entries[$i]);
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : TrFctMessage()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function TrFctMessage($p_file, $p_line, $p_level, $p_message="")
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Look for disabled trace
			    if ($g_pcl_trace_level < $p_level)
			      return;
			
			    // ----- Update the entry
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = "";
			    $g_pcl_trace_entries[$i]['param'] = "";
			    $g_pcl_trace_entries[$i]['message'] = $p_message;
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "3"; // means message of function
			
			    // ----- Action depending on mode
			    PclTraceAction($g_pcl_trace_entries[$i]);
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : TrMessage()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function TrMessage($p_file, $p_line, $p_level, $p_message="")
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Look for disabled trace
			    if ($g_pcl_trace_level < $p_level)
			      return;
			
			    // ----- Update the entry
			    $i = sizeof($g_pcl_trace_entries);
			    $g_pcl_trace_entries[$i]['name'] = "";
			    $g_pcl_trace_entries[$i]['param'] = "";
			    $g_pcl_trace_entries[$i]['message'] = $p_message;
			    $g_pcl_trace_entries[$i]['file'] = $p_file;
			    $g_pcl_trace_entries[$i]['line'] = $p_line;
			    $g_pcl_trace_entries[$i]['index'] = $g_pcl_trace_index;
			    $g_pcl_trace_entries[$i]['type'] = "4"; // means simple message
			
			    // ----- Action depending on mode
			    PclTraceAction($g_pcl_trace_entries[$i]);
			  }
			  // --------------------------------------------------------------------------------
			
			
			  // --------------------------------------------------------------------------------
			  // Function : TrDisplay()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function TrDisplay()
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    // ----- Look for disabled trace
			    if (($g_pcl_trace_level <= 0) || ($g_pcl_trace_mode != "memory"))
			      return;
			
			    $v_font = "\"Verdana, Arial, Helvetica, sans-serif\"";
			
			    // ----- Trace Header
			    echo "<table width=100% border=0 cellspacing=0 cellpadding=0>";
			    echo "<tr bgcolor=#0000CC>";
			    echo "<td bgcolor=#0000CC width=1>";
			    echo "</td>";
			    echo "<td><div align=center><font size=3 color=#FFFFFF face=$v_font>Trace</font></div></td>";
			    echo "</tr>";
			    echo "<tr>";
			    echo "<td bgcolor=#0000CC width=1>";
			    echo "</td>";
			    echo "<td>";
			
			    // ----- Content header
			    echo "<table width=100% border=0 cellspacing=0 cellpadding=0>";
			
			    // ----- Display
			    $v_again=0;
			    for ($i=0; $i<sizeof($g_pcl_trace_entries); $i++)
			    {
			      // ---- Row header
			      echo "<tr>";
			      echo "<td><table width=100% border=0 cellspacing=0 cellpadding=0><tr>";
			      $n = ($g_pcl_trace_entries[$i]['index']+1)*10;
			      echo "<td width=".$n."><table width=100% border=0 cellspacing=0 cellpadding=0><tr>";
			
			      for ($j=0; $j<=$g_pcl_trace_entries[$i]['index']; $j++)
			      {
			        if ($j==$g_pcl_trace_entries[$i]['index'])
			        {
			          if (($g_pcl_trace_entries[$i]['type'] == 1) || ($g_pcl_trace_entries[$i]['type'] == 2))
			          echo "<td width=10><div align=center><font size=2 face=$v_font>+</font></div></td>";
			        }
			        else
			          echo "<td width=10><div align=center><font size=2 face=$v_font>|</font></div></td>";
			      }
			      //echo "<td>&nbsp</td>";
			      echo "</tr></table></td>";
			
			      echo "<td width=2></td>";
			      switch ($g_pcl_trace_entries[$i]['type']) {
			        case 1:
			          echo "<td><font size=2 face=$v_font>".$g_pcl_trace_entries[$i]['name']."(".$g_pcl_trace_entries[$i]['param'].")</font></td>";
			        break;
			        case 2:
			          echo "<td><font size=2 face=$v_font>".$g_pcl_trace_entries[$i]['name']."()=".$g_pcl_trace_entries[$i]['param']."</font></td>";
			        break;
			        case 3:
			        case 4:
			          echo "<td><table width=100% border=0 cellspacing=0 cellpadding=0><td width=20></td><td>";
			          echo "<font size=2 face=$v_font>".$g_pcl_trace_entries[$i]['message']."</font>";
			          echo "</td></table></td>";
			        break;
			        default:
			        echo "<td><font size=2 face=$v_font>".$g_pcl_trace_entries[$i]['name']."(".$g_pcl_trace_entries[$i]['param'].")</font></td>";
			      }
			      echo "</tr></table></td>";
			      echo "<td width=5></td>";
			      echo "<td><font size=1 face=$v_font>".basename($g_pcl_trace_entries[$i]['file'])."</font></td>";
			      echo "<td width=5></td>";
			      echo "<td><font size=1 face=$v_font>".$g_pcl_trace_entries[$i]['line']."</font></td>";
			      echo "</tr>";
			    }
			
			    // ----- Content footer
			    echo "</table>";
			
			    // ----- Trace footer
			    echo "</td>";
			    echo "<td bgcolor=#0000CC width=1>";
			    echo "</td>";
			    echo "</tr>";
			    echo "<tr bgcolor=#0000CC>";
			    echo "<td bgcolor=#0000CC width=1>";
			    echo "</td>";
			    echo "<td><div align=center><font color=#FFFFFF face=$v_font>&nbsp</font></div></td>";
			    echo "</tr>";
			    echo "</table>";
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTraceAction()
			  // Description :
			  // Parameters :
			  // --------------------------------------------------------------------------------
			  function PclTraceAction($p_entry)
			  {
			    global $g_pcl_trace_level;
			    global $g_pcl_trace_mode;
			    global $g_pcl_trace_filename;
			    global $g_pcl_trace_name;
			    global $g_pcl_trace_index;
			    global $g_pcl_trace_entries;
			
			    if ($g_pcl_trace_mode == "normal")
			    {
			      for ($i=0; $i<$p_entry['index']; $i++)
			        echo "---";
			      if ($p_entry['type'] == 1)
			        echo "<b>".$p_entry['name']."</b>(".$p_entry['param'].") : ".$p_entry['message']." [".$p_entry['file'].", ".$p_entry['line']."]<br>";
			      else if ($p_entry['type'] == 2)
			        echo "<b>".$p_entry['name']."</b>()=".$p_entry['param']." : ".$p_entry['message']." [".$p_entry['file'].", ".$p_entry['line']."]<br>";
			      else
			        echo $p_entry['message']." [".$p_entry['file'].", ".$p_entry['line']."]<br>";
			    }
			  }
			  // --------------------------------------------------------------------------------
			
			// ----- End of double include look
			}

			/********************* Fin PCL TRACE ***********************/
			
			/********************* PCL TAR ***********************/
			// --------------------------------------------------------------------------------
			// PhpConcept Library - Tar Module 1.3.1
			// --------------------------------------------------------------------------------
			// License GNU/GPL - Vincent Blavet - January 2003
			// http://www.phpconcept.net
			// --------------------------------------------------------------------------------
			//
			// Presentation :
			//   PclTar is a library that allow you to create a GNU TAR + GNU ZIP archive,
			//   to add files or directories, to extract all the archive or a part of it.
			//   So far tests show that the files generated by PclTar are readable by
			//   gzip tools and WinZip application.
			//
			// Description :
			//   See readme.txt (English & Fran�ais) and http://www.phpconcept.net
			//
			// Warning :
			//   This library and the associated files are non commercial, non professional
			//   work.
			//   It should not have unexpected results. However if any damage is caused by
			//   this software the author can not be responsible.
			//   The use of this software is at the risk of the user.
			//
			// --------------------------------------------------------------------------------
			
			// ----- Look for double include
			if (!defined("PCL_TAR"))
			{
			  define( "PCL_TAR", 1 );
			
			  // ----- Configuration variable
			  // Theses values may be changed by the user of PclTar library
			  if (!isset($g_pcltar_lib_dir))
			    $g_pcltar_lib_dir = "lib";
			
			  // ----- Error codes
			  //   -1 : Unable to open file in binary write mode
			  //   -2 : Unable to open file in binary read mode
			  //   -3 : Invalid parameters
			  //   -4 : File does not exist
			  //   -5 : Filename is too long (max. 99)
			  //   -6 : Not a valid tar file
			  //   -7 : Invalid extracted file size
			  //   -8 : Unable to create directory
			  //   -9 : Invalid archive extension
			  //  -10 : Invalid archive format
			  //  -11 : Unable to delete file (unlink)
			  //  -12 : Unable to rename file (rename)
			  //  -13 : Invalid header checksum
			
			
			// --------------------------------------------------------------------------------
			// ***** UNDER THIS LINE NOTHING NEEDS TO BE MODIFIED *****
			// --------------------------------------------------------------------------------
			
			  // ----- Global variables
			  $g_pcltar_version = "1.3.1";
			
			  // ----- Extract extension type (.php3/.php/...)
			 // $g_pcltar_extension = substr(strrchr(basename($_SERVER['PATH_TRANSLATED']), '.'), 1);
			  $g_pcltar_extension = substr(strrchr(basename($_SERVER["DOCUMENT_ROOT"]), '.'), 1);
			  $g_pcltar_extension = '.php';
			  // ----- Include other libraries
			  // This library should be called by each script before the include of PhpZip
			  // Library in order to limit the potential 'lib' directory path problem.
			  if (!defined("PCLERROR_LIB"))
			  {
			    include($g_pcltar_lib_dir."/pclerror.lib.".$g_pcltar_extension);
			  }
			  if (!defined("PCLTRACE_LIB"))
			  {
			    include($g_pcltar_lib_dir."/pcltrace.lib.".$g_pcltar_extension);
			  }
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarCreate()
			  // Description :
			  //   Creates a new archive with name $p_tarname containing the files and/or
			  //   directories indicated in $p_list. If the tar filename extension is
			  //   ".tar", the file will not be compressed. If it is ".tar.gz" or ".tgz"
			  //   it will be a gzip compressed tar archive.
			  //   If you want to use an other extension, you must indicate the mode in
			  //   $p_mode ("tar" or "tgz").
			  //   $p_add_dir and $p_remove_dir give you the ability to store a path
			  //   which is not the real path of the files.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array containing file or directory names, or
			  //                 a string containing one filename or directory name, or
			  //                 a string containing a list of filenames and/or directory
			  //                 names separated by spaces.
			  //   $p_mode : "tar" for normal tar archive, "tgz" for gzipped tar archive,
			  //             if $p_mode is not specified, it will be determined by the extension.
			  //   $p_add_dir : Path to add in the filename path archived
			  //   $p_remove_dir : Path to remove in the filename path archived
			  // Return Values :
			  //   1 on success, or an error code (see table at the beginning).
			  // --------------------------------------------------------------------------------
			  function PclTarCreate($p_tarname, $p_filelist="", $p_mode="", $p_add_dir="", $p_remove_dir="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarCreate", "tar=$p_tarname, file='$p_filelist', mode=$p_mode, add_dir='$p_add_dir', remove_dir='$p_remove_dir'");
			    $v_result=1;
			
			    // ----- Look for default mode
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      // ----- Extract the tar format from the extension
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Trace
			      TrFctMessage(__FILE__, __LINE__, 1, "Auto mode selected : found $p_mode");
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the create fct
			      $v_result = PclTarHandleCreate($p_tarname, $p_filelist, $p_mode, $p_add_dir, $p_remove_dir);
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the create fct
			      $v_result = PclTarHandleCreate($p_tarname, $v_list, $p_mode, $p_add_dir, $p_remove_dir);
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			      $v_result = -3;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarAdd()
			  // Description :
			  //   PLEASE DO NOT USE ANY MORE THIS FUNCTION. Use PclTarAddList().
			  //
			  //   This function is maintained only for compatibility reason
			  //
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array containing file or directory names, or
			  //                 a string containing one filename or directory name, or
			  //                 a string containing a list of filenames and/or directory
			  //                 names separated by spaces.
			  // Return Values :
			  //   1 on success,
			  //   Or an error code (see list on top).
			  // --------------------------------------------------------------------------------
			  function PclTarAdd($p_tarname, $p_filelist)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarAdd", "tar=$p_tarname, file=$p_filelist");
			    $v_result=1;
			    $v_list_detail = array();
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			    {
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the add fct
			      $v_result = PclTarHandleAppend($p_tarname, $p_filelist, $p_mode, $v_list_detail, "", "");
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the add fct
			      $v_result = PclTarHandleAppend($p_tarname, $v_list, $p_mode, $v_list_detail, "", "");
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			      $v_result = -3;
			    }
			
			    // ----- Cleaning
			    unset($v_list_detail);
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarAddList()
			  // Description :
			  //   Add a list of files or directories ($p_filelist) in the tar archive $p_tarname.
			  //   The list can be an array of file/directory names or a string with names
			  //   separated by one space.
			  //   $p_add_dir and $p_remove_dir will give the ability to memorize a path which is
			  //   different from the real path of the file. This is usefull if you want to have PclTar
			  //   running in any directory, and memorize relative path from an other directory.
			  //   If $p_mode is not set it will be automatically computed from the $p_tarname
			  //   extension (.tar, .tar.gz or .tgz).
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array containing file or directory names, or
			  //                 a string containing one filename or directory name, or
			  //                 a string containing a list of filenames and/or directory
			  //                 names separated by spaces.
			  //   $p_add_dir : Path to add in the filename path archived
			  //   $p_remove_dir : Path to remove in the filename path archived
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   1 on success,
			  //   Or an error code (see list on top).
			  // --------------------------------------------------------------------------------
			  function PclTarAddList($p_tarname, $p_filelist, $p_add_dir="", $p_remove_dir="", $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarAddList", "tar=$p_tarname, file=$p_filelist, p_add_dir='$p_add_dir', p_remove_dir='$p_remove_dir', mode=$p_mode");
			    $v_result=1;
			    $p_list_detail = array();
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the add fct
			      $v_result = PclTarHandleAppend($p_tarname, $p_filelist, $p_mode, $p_list_detail, $p_add_dir, $p_remove_dir);
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the add fct
			      $v_result = PclTarHandleAppend($p_tarname, $v_list, $p_mode, $p_list_detail, $p_add_dir, $p_remove_dir);
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			      $v_result = -3;
			    }
			
			    // ----- Return
			    if ($v_result != 1)
			    {
			      TrFctEnd(__FILE__, __LINE__, 0);
			      return 0;
			    }
			    TrFctEnd(__FILE__, __LINE__, $p_list_detail);
			    return $p_list_detail;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarList()
			  // Description :
			  //   Gives the list of all the files present in the tar archive $p_tarname.
			  //   The list is the function result, it will be 0 on error.
			  //   Depending on the $p_tarname extension (.tar, .tar.gz or .tgz) the
			  //   function will determine the type of the archive.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //  0 on error (Use PclErrorCode() and PclErrorString() for more info)
			  //  or
			  //  An array containing file properties. Each file properties is an array of
			  //  properties.
			  //  The properties (array field names) are :
			  //    filename, size, mode, uid, gid, mtime, typeflag, status
			  //  Exemple : $v_list = PclTarList("my.tar");
			  //            for ($i=0; $i<sizeof($v_list); $i++)
			  //              echo "Filename :'".$v_list[$i][filename]."'<br>";
			  // --------------------------------------------------------------------------------
			  function PclTarList($p_tarname, $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarList", "tar=$p_tarname, mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Call the extracting fct
			    $p_list = array();
			    if (($v_result = PclTarHandleExtract($p_tarname, 0, $p_list, "list", "", $p_mode, "")) != 1)
			    {
			      unset($p_list);
			      TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			      return(0);
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarExtract()
			  // Description :
			  //   Extract all the files present in the archive $p_tarname, in the directory
			  //   $p_path. The relative path of the archived files are keep and become
			  //   relative to $p_path.
			  //   If a file with the same name already exists it will be replaced.
			  //   If the path to the file does not exist, it will be created.
			  //   Depending on the $p_tarname extension (.tar, .tar.gz or .tgz) the
			  //   function will determine the type of the archive.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file.
			  //   $p_path : Path where the files will be extracted. The files will use
			  //             their memorized path from $p_path.
			  //             If $p_path is "", files will be extracted in "./".
			  //   $p_remove_path : Path to remove (from the file memorized path) while writing the
			  //                    extracted files. If the path does not match the file path,
			  //                    the file is extracted with its memorized path.
			  //                    $p_path and $p_remove_path are commulative.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   Same as PclTarList()
			  // --------------------------------------------------------------------------------
			  function PclTarExtract($p_tarname, $p_path="./", $p_remove_path="", $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarExtract", "tar='$p_tarname', path='$p_path', remove_path='$p_remove_path', mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    { 
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Call the extracting fct
			    if (($v_result = PclTarHandleExtract($p_tarname, 0, $p_list, "complete", $p_path, $p_mode, $p_remove_path)) != 1)
			    {
			      TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			      return(0);
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarExtractList()
			  // Description :
			  //   Extract the files present in the archive $p_tarname and specified in
			  //   $p_filelist, in the directory
			  //   $p_path. The relative path of the archived files are keep and become
			  //   relative to $p_path.
			  //   If a directory is sp�cified in the list, all the files from this directory
			  //   will be extracted.
			  //   If a file with the same name already exists it will be replaced.
			  //   If the path to the file does not exist, it will be created.
			  //   Depending on the $p_tarname extension (.tar, .tar.gz or .tgz) the
			  //   function will determine the type of the archive.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array containing file or directory names, or
			  //                 a string containing one filename or directory name, or
			  //                 a string containing a list of filenames and/or directory
			  //                 names separated by spaces.
			  //   $p_path : Path where the files will be extracted. The files will use
			  //             their memorized path from $p_path.
			  //             If $p_path is "", files will be extracted in "./".
			  //   $p_remove_path : Path to remove (from the file memorized path) while writing the
			  //                    extracted files. If the path does not match the file path,
			  //                    the file is extracted with its memorized path.
			  //                    $p_path and $p_remove_path are commulative.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   Same as PclTarList()
			  // --------------------------------------------------------------------------------
			  function PclTarExtractList($p_tarname, $p_filelist, $p_path="./", $p_remove_path="", $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarExtractList", "tar=$p_tarname, list, path=$p_path, remove_path='$p_remove_path', mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleExtract($p_tarname, $p_filelist, $p_list, "partial", $p_path, $v_tar_mode, $p_remove_path)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleExtract($p_tarname, $v_list, $p_list, "partial", $p_path, $v_tar_mode, $p_remove_path)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return 0;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarExtractIndex()
			  // Description :
			  //   Extract the files present in the archive $p_tarname and specified at
			  //   the indexes in $p_index, in the directory
			  //   $p_path. The relative path of the archived files are keep and become
			  //   relative to $p_path.
			  //   If a directory is specified in the list, the directory only is created. All
			  //   the file stored in this archive for this directory
			  //   are not extracted.
			  //   If a file with the same name already exists it will be replaced.
			  //   If the path to the file does not exist, it will be created.
			  //   Depending on the $p_tarname extension (.tar, .tar.gz or .tgz) the
			  //   function will determine the type of the archive.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_index : A single index (integer) or a string of indexes of files to
			  //              extract. The form of the string is "0,4-6,8-12" with only numbers
			  //              and '-' for range or ',' to separate ranges. No spaces or ';'
			  //              are allowed.
			  //   $p_path : Path where the files will be extracted. The files will use
			  //             their memorized path from $p_path.
			  //             If $p_path is "", files will be extracted in "./".
			  //   $p_remove_path : Path to remove (from the file memorized path) while writing the
			  //                    extracted files. If the path does not match the file path,
			  //                    the file is extracted with its memorized path.
			  //                    $p_path and $p_remove_path are commulative.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   Same as PclTarList()
			  // --------------------------------------------------------------------------------
			  function PclTarExtractIndex($p_tarname, $p_index, $p_path="./", $p_remove_path="", $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarExtractIndex", "tar=$p_tarname, index='$p_index', path=$p_path, remove_path='$p_remove_path', mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Look if the $p_index is really an integer
			    if (is_integer($p_index))
			    {
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleExtractByIndexList($p_tarname, "$p_index", $p_list, $p_path, $p_remove_path, $v_tar_mode)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_index))
			    {
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleExtractByIndexList($p_tarname, $p_index, $p_list, $p_path, $p_remove_path, $v_tar_mode)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type $p_index");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return 0;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarDelete()
			  // Description :
			  //   This function deletes from the archive $p_tarname the files which are listed
			  //   in $p_filelist. $p_filelist can be a string with file names separated by
			  //   spaces, or an array containing the file names.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array or a string containing file names to remove from the
			  //                 archive.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   List of the files which are kept in the archive (same format as PclTarList())
			  // --------------------------------------------------------------------------------
			  function PclTarDelete($p_tarname, $p_filelist, $p_mode="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarDelete", "tar='$p_tarname', list='$p_filelist', mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleDelete($p_tarname, $p_filelist, $p_list, $p_mode)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleDelete($p_tarname, $v_list, $p_list, $p_mode)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return 0;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarUpdate()
			  // Description :
			  //   This function updates the files in $p_filelist which are already in the
			  //   $p_tarname archive with an older last modified date. If the file does not
			  //   exist, it is added at the end of the archive.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_filelist : An array or a string containing file names to update from the
			  //                 archive.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  // Return Values :
			  //   List of the files contained in the archive. The field status contains
			  //   "updated", "not_updated", "added" or "ok" for the files not concerned.
			  // --------------------------------------------------------------------------------
			  function PclTarUpdate($p_tarname, $p_filelist, $p_mode="", $p_add_dir="", $p_remove_dir="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarUpdate", "tar='$p_tarname', list='$p_filelist', mode='$p_mode'");
			    $v_result=1;
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Look if the $p_filelist is really an array
			    if (is_array($p_filelist))
			    {
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleUpdate($p_tarname, $p_filelist, $p_list, $p_mode, $p_add_dir, $p_remove_dir)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Look if the $p_filelist is a string
			    else if (is_string($p_filelist))
			    {
			      // ----- Create a list with the elements from the string
			      $v_list = explode(" ", $p_filelist);
			
			      // ----- Call the extracting fct
			      if (($v_result = PclTarHandleUpdate($p_tarname, $v_list, $p_list, $p_mode, $p_add_dir, $p_remove_dir)) != 1)
			      {
			        TrFctEnd(__FILE__, __LINE__, 0, PclErrorString());
			        return(0);
			      }
			    }
			
			    // ----- Invalid variable
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid variable type p_filelist");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return 0;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $p_list);
			    return $p_list;
			  }
			  // --------------------------------------------------------------------------------
			
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarMerge()
			  // Description :
			  //   This function add the content of $p_tarname_add at the end of $p_tarname.
			  // Parameters :
			  //   $p_tarname : Name of an existing tar file
			  //   $p_tarname_add : Name of an existing tar file taht will be added at the end
			  //                    of $p_tarname.
			  //   $p_mode : 'tar' or 'tgz', if not set, will be determined by $p_tarname extension
			  //   $p_mode_add : 'tar' or 'tgz', if not set, will be determined by $p_tarname_add
			  //                 extension
			  // Return Values :
			  //   List of the files contained in the archive. The field status contains
			  //   "updated", "not_updated", "added" or "ok" for the files not concerned.
			  // --------------------------------------------------------------------------------
			  function PclTarMerge($p_tarname, $p_tarname_add, $p_mode="", $p_mode_add="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarMerge", "tar='$p_tarname', tar_add='$p_tarname_add', mode='$p_mode', mode_add='$p_mode_add'");
			    $v_result=1;
			
			    // ----- Check the parameters
			    if (($p_tarname == "") || ($p_tarname_add == ""))
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid empty archive name");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Extract the tar format from the extension
			    if (($p_mode == "") || (($p_mode!="tar") && ($p_mode!="tgz")))
			    {
			      if (($p_mode = PclTarHandleExtension($p_tarname)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			    if (($p_mode_add == "") || (($p_mode_add!="tar") && ($p_mode_add!="tgz")))
			    {
			      if (($p_mode_add = PclTarHandleExtension($p_tarname_add)) == "")
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return 0;
			      }
			    }
			
			    // ----- Clear filecache
			    clearstatcache();
			
			    // ----- Check the file size
			    if ((!is_file($p_tarname)) ||
			        (((($v_size = filesize($p_tarname)) % 512) != 0) && ($p_mode=="tar")))
			    {
			      // ----- Error log
			      if (!is_file($p_tarname))
			        PclErrorLog(-4, "Archive '$p_tarname' does not exist");
			      else
			        PclErrorLog(-6, "Archive '$p_tarname' has invalid size ".filesize($p_tarname)."(not a 512 block multiple)");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			    if ((!is_file($p_tarname_add)) ||
			        (((($v_size_add = filesize($p_tarname_add)) % 512) != 0) && ($p_mode_add=="tar")))
			    {
			      // ----- Error log
			      if (!is_file($p_tarname_add))
			        PclErrorLog(-4, "Archive '$p_tarname_add' does not exist");
			      else
			        PclErrorLog(-6, "Archive '$p_tarname_add' has invalid size ".filesize($p_tarname_add)."(not a 512 block multiple)");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look for compressed archive
			    if ($p_mode == "tgz")
			    {
			      // ----- Open the file in read mode
			      if (($p_tar = @gzopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @gzopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        gzclose($p_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Read the first 512 bytes block
			      $v_buffer = gzread($p_tar, 512);
			
			      // ----- Read the following blocks but not the last one
			      if (!gzeof($p_tar))
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "More than one 512 block file");
			        $i=1;
			
			        // ----- Read new 512 block and write the already read
			        do{
			          // ----- Write the already read block
			          $v_binary_data = pack("a512", "$v_buffer");
			          gzputs($v_temp_tar, $v_binary_data);
			
			          $i++;
			          TrFctMessage(__FILE__, __LINE__, 3, "Reading block $i");
			
			          // ----- Read next block
			          $v_buffer = gzread($p_tar, 512);
			
			        } while (!gzeof($p_tar));
			
			        TrFctMessage(__FILE__, __LINE__, 3, "$i 512 bytes blocks");
			      }
			    }
			
			    // ----- Look for uncompressed tar file
			    else if ($p_mode=="tar")
			    {
			      // ----- Open the tar file
			      if (($p_tar = fopen($p_tarname, "r+b")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$p_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Go to the beginning of last block
			      TrFctMessage(__FILE__, __LINE__, 4, "Position before :".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			      fseek($p_tar, $v_size-512);
			      TrFctMessage(__FILE__, __LINE__, 4, "Position after :".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			    }
			
			    // ----- Look for unknown type
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid tar mode $p_mode");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look for type of archive to add
			    if ($p_mode_add == "tgz")
			    {
			      TrFctMessage(__FILE__, __LINE__, 4, "Opening file $p_tarname_add");
			
			      // ----- Open the file in read mode
			      if (($p_tar_add = @gzopen($p_tarname_add, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname_add' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Read the first 512 bytes block
			      $v_buffer = gzread($p_tar_add, 512);
			
			      // ----- Read the following blocks but not the last one
			      if (!gzeof($p_tar_add))
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "More than one 512 block file");
			        $i=1;
			
			        // ----- Read new 512 block and write the already read
			        do{
			          // ----- Write the already read block
			          $v_binary_data = pack("a512", "$v_buffer");
			          if ($p_mode=="tar")
			            fputs($p_tar, $v_binary_data);
			          else
			            gzputs($v_temp_tar, $v_binary_data);
			
			          $i++;
			          TrFctMessage(__FILE__, __LINE__, 3, "Reading block $i");
			
			          // ----- Read next block
			          $v_buffer = gzread($p_tar_add, 512);
			
			        } while (!gzeof($p_tar_add));
			
			        TrFctMessage(__FILE__, __LINE__, 3, "$i 512 bytes blocks");
			      }
			
			      // ----- Close the files
			      gzclose($p_tar_add);
			    }
			
			    // ----- Look for uncompressed tar file
			    else if ($p_mode=="tar")
			    {
			      // ----- Open the file in read mode
			      if (($p_tar_add = @fopen($p_tarname_add, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname_add' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Read the first 512 bytes block
			      $v_buffer = fread($p_tar_add, 512);
			
			      // ----- Read the following blocks but not the last one
			      if (!feof($p_tar_add))
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "More than one 512 block file");
			        $i=1;
			
			        // ----- Read new 512 block and write the already read
			        do{
			          // ----- Write the already read block
			          $v_binary_data = pack("a512", "$v_buffer");
			          if ($p_mode=="tar")
			            fputs($p_tar, $v_binary_data);
			          else
			            gzputs($v_temp_tar, $v_binary_data);
			
			          $i++;
			          TrFctMessage(__FILE__, __LINE__, 3, "Reading block $i");
			
			          // ----- Read next block
			          $v_buffer = fread($p_tar_add, 512);
			
			        } while (!feof($p_tar_add));
			
			        TrFctMessage(__FILE__, __LINE__, 3, "$i 512 bytes blocks");
			      }
			
			      // ----- Close the files
			      fclose($p_tar_add);
			    }
			
			    // ----- Call the footer of the tar archive
			    $v_result = PclTarHandleFooter($p_tar, $p_mode);
			
			    // ----- Look for closing compressed archive
			    if ($p_mode == "tgz")
			    {
			      // ----- Close the files
			      gzclose($p_tar);
			      gzclose($v_temp_tar);
			
			      // ----- Unlink tar file
			      if (!@unlink($p_tarname))
			      {
			        // ----- Error log
			        PclErrorLog(-11, "Error while deleting archive name $p_tarname");
			      }
			
			      // ----- Rename tar file
			      if (!@rename($v_temp_tarname, $p_tarname))
			      {
			        // ----- Error log
			        PclErrorLog(-12, "Error while renaming temporary file $v_temp_tarname to archive name $p_tarname");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, $v_result);
			      return $v_result;
			    }
			
			    // ----- Look for closing uncompressed tar file
			    else if ($p_mode=="tar")
			    {
			      // ----- Close the tarfile
			      fclose($p_tar);
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			
			// --------------------------------------------------------------------------------
			// ***** UNDER THIS LINE ARE DEFINED PRIVATE INTERNAL FUNCTIONS *****
			// *****                                                        *****
			// *****       THESES FUNCTIONS MUST NOT BE USED DIRECTLY       *****
			// --------------------------------------------------------------------------------
			
			
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleCreate()
			  // Description :
			  // Parameters :
			  //   $p_tarname : Name of the tar file
			  //   $p_list : An array containing the file or directory names to add in the tar
			  //   $p_mode : "tar" for normal tar archive, "tgz" for gzipped tar archive
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleCreate($p_tarname, $p_list, $p_mode, $p_add_dir="", $p_remove_dir="")
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleCreate", "tar=$p_tarname, list, mode=$p_mode, add_dir='$p_add_dir', remove_dir='$p_remove_dir'");
			    $v_result=1;
			    $v_list_detail = array();
			
			    // ----- Check the parameters
			    if (($p_tarname == "") || (($p_mode != "tar") && ($p_mode != "tgz")))
			    {
			      // ----- Error log
			      if ($p_tarname == "")
			        PclErrorLog(-3, "Invalid empty archive name");
			      else
			        PclErrorLog(-3, "Unknown mode '$p_mode'");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look for tar file
			    if ($p_mode == "tar")
			    {
			      // ----- Open the tar file
			      if (($p_tar = fopen($p_tarname, "wb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file [$p_tarname] in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Call the adding fct inside the tar
			      if (($v_result = PclTarHandleAddList($p_tar, $p_list, $p_mode, $v_list_detail, $p_add_dir, $p_remove_dir)) == 1)
			      {
			        // ----- Call the footer of the tar archive
			        $v_result = PclTarHandleFooter($p_tar, $p_mode);
			      }
			
			      // ----- Close the tarfile
			      fclose($p_tar);
			    }
			    // ----- Look for tgz file
			    else
			    {
			      // ----- Open the tar file
			      if (($p_tar = @gzopen($p_tarname, "wb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file [$p_tarname] in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Call the adding fct inside the tar
			      if (($v_result = PclTarHandleAddList($p_tar, $p_list, $p_mode, $v_list_detail, $p_add_dir, $p_remove_dir)) == 1)
			      {
			        // ----- Call the footer of the tar archive
			        $v_result = PclTarHandleFooter($p_tar, $p_mode);
			      }
			
			      // ----- Close the tarfile
			      gzclose($p_tar);
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleAppend()
			  // Description :
			  // Parameters :
			  //   $p_tarname : Name of the tar file
			  //   $p_list : An array containing the file or directory names to add in the tar
			  //   $p_mode : "tar" for normal tar archive, "tgz" for gzipped tar archive
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleAppend($p_tarname, $p_list, $p_mode, &$p_list_detail, $p_add_dir, $p_remove_dir)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleAppend", "tar=$p_tarname, list, mode=$p_mode");
			    $v_result=1;
			
			    // ----- Check the parameters
			    if ($p_tarname == "")
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid empty archive name");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    clearstatcache();
			
			    // ----- Check the file size
			    if ((!is_file($p_tarname)) ||
			        (((($v_size = filesize($p_tarname)) % 512) != 0) && ($p_mode=="tar")))
			    {
			      // ----- Error log
			      if (!is_file($p_tarname))
			        PclErrorLog(-4, "Archive '$p_tarname' does not exist");
			      else
			        PclErrorLog(-6, "Archive '$p_tarname' has invalid size ".filesize($p_tarname)."(not a 512 block multiple)");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look for compressed archive
			    if ($p_mode == "tgz")
			    {
			      // ----- Open the file in read mode
			      if (($p_tar = @gzopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @gzopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        gzclose($p_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Read the first 512 bytes block
			      $v_buffer = gzread($p_tar, 512);
			
			      // ----- Read the following blocks but not the last one
			      if (!gzeof($p_tar))
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "More than one 512 block file");
			        $i=1;
			
			        // ----- Read new 512 block and write the already read
			        do{
			          // ----- Write the already read block
			          $v_binary_data = pack("a512", "$v_buffer");
			          gzputs($v_temp_tar, $v_binary_data);
			
			          $i++;
			          TrFctMessage(__FILE__, __LINE__, 3, "Reading block $i");
			
			          // ----- Read next block
			          $v_buffer = gzread($p_tar, 512);
			
			        } while (!gzeof($p_tar));
			
			        TrFctMessage(__FILE__, __LINE__, 3, "$i 512 bytes blocks");
			      }
			
			      // ----- Call the adding fct inside the tar
			      if (($v_result = PclTarHandleAddList($v_temp_tar, $p_list, $p_mode, $p_list_detail, $p_add_dir, $p_remove_dir)) == 1)
			      {
			        // ----- Call the footer of the tar archive
			        $v_result = PclTarHandleFooter($v_temp_tar, $p_mode);
			      }
			
			      // ----- Close the files
			      gzclose($p_tar);
			      gzclose($v_temp_tar);
			
			      // ----- Unlink tar file
			      if (!@unlink($p_tarname))
			      {
			        // ----- Error log
			        PclErrorLog(-11, "Error while deleting archive name $p_tarname");
			      }
			
			      // ----- Rename tar file
			      if (!@rename($v_temp_tarname, $p_tarname))
			      {
			        // ----- Error log
			        PclErrorLog(-12, "Error while renaming temporary file $v_temp_tarname to archive name $p_tarname");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, $v_result);
			      return $v_result;
			    }
			
			    // ----- Look for uncompressed tar file
			    else if ($p_mode=="tar")
			    {
			      // ----- Open the tar file
			      if (($p_tar = fopen($p_tarname, "r+b")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$p_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Go to the beginning of last block
			      TrFctMessage(__FILE__, __LINE__, 4, "Position before :".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			      fseek($p_tar, $v_size-512);
			      TrFctMessage(__FILE__, __LINE__, 4, "Position after :".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			
			      // ----- Call the adding fct inside the tar
			      if (($v_result = PclTarHandleAddList($p_tar, $p_list, $p_mode, $p_list_detail, $p_add_dir, $p_remove_dir)) == 1)
			      {
			        // ----- Call the footer of the tar archive
			        $v_result = PclTarHandleFooter($p_tar, $p_mode);
			      }
			
			      // ----- Close the tarfile
			      fclose($p_tar);
			    }
			
			    // ----- Look for unknown type
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid tar mode $p_mode");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleAddList()
			  // Description :
			  //   $p_add_dir and $p_remove_dir will give the ability to memorize a path which is
			  //   different from the real path of the file. This is usefull if you want to have PclTar
			  //   running in any directory, and memorize relative path from an other directory.
			  // Parameters :
			  //   $p_tar : File descriptor of the tar archive
			  //   $p_list : An array containing the file or directory names to add in the tar
			  //   $p_mode : "tar" for normal tar archive, "tgz" for gzipped tar archive
			  //   $p_list_detail : list of added files with their properties (specially the status field)
			  //   $p_add_dir : Path to add in the filename path archived
			  //   $p_remove_dir : Path to remove in the filename path archived
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleAddList($p_tar, $p_list, $p_mode, &$p_list_detail, $p_add_dir, $p_remove_dir)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleAddList", "tar='$p_tar', list, mode='$p_mode', add_dir='$p_add_dir', remove_dir='$p_remove_dir'");
			    $v_result=1;
			    $v_header = array();
			
			    // ----- Recuperate the current number of elt in list
			    $v_nb = sizeof($p_list_detail);
			
			    // ----- Check the parameters
			    if ($p_tar == 0)
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid file descriptor in file ".__FILE__.", line ".__LINE__);
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Check the arguments
			    if (sizeof($p_list) == 0)
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid file list parameter (invalid or empty list)");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Loop on the files
			    for ($j=0; ($j<count($p_list)) && ($v_result==1); $j++)
			    {
			      // ----- Recuperate the filename
			      $p_filename = $p_list[$j];
			
			      TrFctMessage(__FILE__, __LINE__, 2, "Looking for file [$p_filename]");
			
			      // ----- Skip empty file names
			      if ($p_filename == "")
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Skip empty filename");
			        continue;
			      }
			
			      // ----- Check the filename
			      if (!file_exists($p_filename))
			      {
			        // ----- Error log
			        TrFctMessage(__FILE__, __LINE__, 2, "File '$p_filename' does not exists");
			        PclErrorLog(-4, "File '$p_filename' does not exists");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Check the path length
			      if (strlen($p_filename) > 99)
			      {
			        // ----- Error log
			        PclErrorLog(-5, "File name is too long (max. 99) : '$p_filename'");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 4, "File position before header =".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			
			      // ----- Add the file
			      if (($v_result = PclTarHandleAddFile($p_tar, $p_filename, $p_mode, $v_header, $p_add_dir, $p_remove_dir)) != 1)
			      {
			        // ----- Return status
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      // ----- Store the file infos
			      $p_list_detail[$v_nb++] = $v_header;
			
			      // ----- Look for directory
			      if (is_dir($p_filename))
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "$p_filename is a directory");
			
			        // ----- Look for path
			        if ($p_filename != ".")
			          $v_path = $p_filename."/";
			        else
			          $v_path = "";
			
			        // ----- Read the directory for files and sub-directories
			        $p_hdir = opendir($p_filename);
			        $p_hitem = readdir($p_hdir); // '.' directory
			        $p_hitem = readdir($p_hdir); // '..' directory
			        while ($p_hitem = readdir($p_hdir))
			        {
			          // ----- Look for a file
			          if (is_file($v_path.$p_hitem))
			          {
			            TrFctMessage(__FILE__, __LINE__, 4, "Add the file '".$v_path.$p_hitem."'");
			
			            // ----- Add the file
			            if (($v_result = PclTarHandleAddFile($p_tar, $v_path.$p_hitem, $p_mode, $v_header, $p_add_dir, $p_remove_dir)) != 1)
			            {
			              // ----- Return status
			              TrFctEnd(__FILE__, __LINE__, $v_result);
			              return $v_result;
			            }
			
			            // ----- Store the file infos
			            $p_list_detail[$v_nb++] = $v_header;
			          }
			
			          // ----- Recursive call to PclTarHandleAddFile()
			          else
			          {
			            TrFctMessage(__FILE__, __LINE__, 4, "'".$v_path.$p_hitem."' is a directory");
			
			            // ----- Need an array as parameter
			            $p_temp_list[0] = $v_path.$p_hitem;
			            $v_result = PclTarHandleAddList($p_tar, $p_temp_list, $p_mode, $p_list_detail, $p_add_dir, $p_remove_dir);
			          }
			        }
			
			        // ----- Free memory for the recursive loop
			        unset($p_temp_list);
			        unset($p_hdir);
			        unset($p_hitem);
			      }
			      else
			      {
			        TrFctMessage(__FILE__, __LINE__, 4, "File position after blocks =".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			      }
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleAddFile()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleAddFile($p_tar, $p_filename, $p_mode, &$p_header, $p_add_dir, $p_remove_dir)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleAddFile", "tar='$p_tar', filename='$p_filename', p_mode='$p_mode', add_dir='$p_add_dir', remove_dir='$p_remove_dir'");
			    $v_result=1;
			
			    // ----- Check the parameters
			    if ($p_tar == 0)
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid file descriptor in file ".__FILE__.", line ".__LINE__);
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Skip empty file names
			    if ($p_filename == "")
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid file list parameter (invalid or empty list)");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Calculate the stored filename
			    $v_stored_filename = $p_filename;
			    if ($p_remove_dir != "")
			    {
			      if (substr($p_remove_dir, -1) != '/')
			        $p_remove_dir .= "/";
			
			      if ((substr($p_filename, 0, 2) == "./") || (substr($p_remove_dir, 0, 2) == "./"))
			      {
			        if ((substr($p_filename, 0, 2) == "./") && (substr($p_remove_dir, 0, 2) != "./"))
			          $p_remove_dir = "./".$p_remove_dir;
			        if ((substr($p_filename, 0, 2) != "./") && (substr($p_remove_dir, 0, 2) == "./"))
			          $p_remove_dir = substr($p_remove_dir, 2);
			      }
			
			      if (substr($p_filename, 0, strlen($p_remove_dir)) == $p_remove_dir)
			      {
			        $v_stored_filename = substr($p_filename, strlen($p_remove_dir));
			        TrFctMessage(__FILE__, __LINE__, 3, "Remove path '$p_remove_dir' in file '$p_filename' = '$v_stored_filename'");
			      }
			    }
			    if ($p_add_dir != "")
			    {
			      if (substr($p_add_dir, -1) == "/")
			        $v_stored_filename = $p_add_dir.$v_stored_filename;
			      else
			        $v_stored_filename = $p_add_dir."/".$v_stored_filename;
			      TrFctMessage(__FILE__, __LINE__, 3, "Add path '$p_add_dir' in file '$p_filename' = '$v_stored_filename'");
			    }
			
			    // ----- Check the path length
			    if (strlen($v_stored_filename) > 99)
			    {
			      // ----- Error log
			      PclErrorLog(-5, "Stored file name is too long (max. 99) : '$v_stored_filename'");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Look for a file
			    if (is_file($p_filename))
			    {
			      // ----- Open the source file
			      if (($v_file = fopen($p_filename, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_filename' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Call the header generation
			      if (($v_result = PclTarHandleHeader($p_tar, $p_filename, $p_mode, $p_header, $v_stored_filename)) != 1)
			      {
			        // ----- Return status
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 4, "File position after header =".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			
			      // ----- Read the file by 512 octets blocks
			      $i=0;
			      while (($v_buffer = fread($v_file, 512)) != "")
			      {
			        $v_binary_data = pack("a512", "$v_buffer");
			        if ($p_mode == "tar")
			          fputs($p_tar, $v_binary_data);
			        else
			          gzputs($p_tar, $v_binary_data);
			        $i++;
			      }
			      TrFctMessage(__FILE__, __LINE__, 2, "$i 512 bytes blocks");
			
			      // ----- Close the file
			      fclose($v_file);
			
			      TrFctMessage(__FILE__, __LINE__, 4, "File position after blocks =".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			    }
			
			    // ----- Look for a directory
			    else
			    {
			      // ----- Call the header generation
			      if (($v_result = PclTarHandleHeader($p_tar, $p_filename, $p_mode, $p_header, $v_stored_filename)) != 1)
			      {
			        // ----- Return status
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 4, "File position after header =".($p_mode=="tar"?ftell($p_tar):gztell($p_tar)));
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleHeader()
			  // Description :
			  //   This function creates in the TAR $p_tar, the TAR header for the file
			  //   $p_filename.
			  //
			  //   1. The informations needed to compose the header are recuperated and formatted
			  //   2. Two binary strings are composed for the first part of the header, before
			  //      and after checksum field.
			  //   3. The checksum is calculated from the two binary strings
			  //   4. The header is write in the tar file (first binary string, binary string
			  //      for checksum and last binary string).
			  // Parameters :
			  //   $p_tar : a valid file descriptor, opened in write mode,
			  //   $p_filename : The name of the file the header is for,
			  //   $p_mode : The mode of the archive ("tar" or "tgz").
			  //   $p_header : A pointer to a array where will be set the file properties
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleHeader($p_tar, $p_filename, $p_mode, &$p_header, $p_stored_filename)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleHeader", "tar=$p_tar, file='$p_filename', mode='$p_mode', stored_filename='$p_stored_filename'");
			    $v_result=1;
			
			    // ----- Check the parameters
			    if (($p_tar == 0) || ($p_filename == ""))
			    {
			      // ----- Error log
			      PclErrorLog(-3, "Invalid file descriptor in file ".__FILE__.", line ".__LINE__);
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Filename (reduce the path of stored name)
			    if ($p_stored_filename == "")
			      $p_stored_filename = $p_filename;
			    $v_reduce_filename = PclTarHandlePathReduction($p_stored_filename);
			    TrFctMessage(__FILE__, __LINE__, 2, "Filename (reduced) '$v_reduce_filename', strlen ".strlen($v_reduce_filename));
			
			    // ----- Get file info
			    $v_info = stat($p_filename);
			    $v_uid = sprintf("%6s ", DecOct($v_info[4]));
			    $v_gid = sprintf("%6s ", DecOct($v_info[5]));
			    TrFctMessage(__FILE__, __LINE__, 3, "uid=$v_uid, gid=$v_gid");
			    $v_perms = sprintf("%6s ", DecOct(fileperms($p_filename)));
			    TrFctMessage(__FILE__, __LINE__, 3, "file permissions $v_perms");
			
			    // ----- File mtime
			    $v_mtime_data = filemtime($p_filename);
			    TrFctMessage(__FILE__, __LINE__, 2, "File mtime : $v_mtime_data");
			    $v_mtime = sprintf("%11s", DecOct($v_mtime_data));
			
			    // ----- File typeflag
			    // '0' or '\0' is the code for regular file
			    // '5' is directory
			    if (is_dir($p_filename))
			    {
			      $v_typeflag = "5";
			      $v_size = 0;
			    }
			    else
			    {
			      $v_typeflag = "";
			
			      // ----- Get the file size
			      clearstatcache();
			      $v_size = filesize($p_filename);
			    }
			
			    TrFctMessage(__FILE__, __LINE__, 2, "File size : $v_size");
			    $v_size = sprintf("%11s ", DecOct($v_size));
			
			    TrFctMessage(__FILE__, __LINE__, 2, "File typeflag : $v_typeflag");
			
			    // ----- Linkname
			    $v_linkname = "";
			
			    // ----- Magic
			    $v_magic = "";
			
			    // ----- Version
			    $v_version = "";
			
			    // ----- uname
			    $v_uname = "";
			
			    // ----- gname
			    $v_gname = "";
			
			    // ----- devmajor
			    $v_devmajor = "";
			
			    // ----- devminor
			    $v_devminor = "";
			
			    // ----- prefix
			    $v_prefix = "";
			
			    // ----- Compose the binary string of the header in two parts arround the checksum position
			    $v_binary_data_first = pack("a100a8a8a8a12A12", $v_reduce_filename, $v_perms, $v_uid, $v_gid, $v_size, $v_mtime);
			    $v_binary_data_last = pack("a1a100a6a2a32a32a8a8a155a12", $v_typeflag, $v_linkname, $v_magic, $v_version, $v_uname, $v_gname, $v_devmajor, $v_devminor, $v_prefix, "");
			
			    // ----- Calculate the checksum
			    $v_checksum = 0;
			    // ..... First part of the header
			    for ($i=0; $i<148; $i++)
			    {
			      $v_checksum += ord(substr($v_binary_data_first,$i,1));
			    }
			    // ..... Ignore the checksum value and replace it by ' ' (space)
			    for ($i=148; $i<156; $i++)
			    {
			      $v_checksum += ord(' ');
			    }
			    // ..... Last part of the header
			    for ($i=156, $j=0; $i<512; $i++, $j++)
			    {
			      $v_checksum += ord(substr($v_binary_data_last,$j,1));
			    }
			    TrFctMessage(__FILE__, __LINE__, 3, "Calculated checksum : $v_checksum");
			
			    // ----- Write the first 148 bytes of the header in the archive
			    if ($p_mode == "tar")
			      fputs($p_tar, $v_binary_data_first, 148);
			    else
			      gzputs($p_tar, $v_binary_data_first, 148);
			
			    // ----- Write the calculated checksum
			    $v_checksum = sprintf("%6s ", DecOct($v_checksum));
			    $v_binary_data = pack("a8", $v_checksum);
			    if ($p_mode == "tar")
			      fputs($p_tar, $v_binary_data, 8);
			    else
			      gzputs($p_tar, $v_binary_data, 8);
			
			    // ----- Write the last 356 bytes of the header in the archive
			    if ($p_mode == "tar")
			      fputs($p_tar, $v_binary_data_last, 356);
			    else
			      gzputs($p_tar, $v_binary_data_last, 356);
			
			    // ----- Set the properties in the header "structure"
			    $p_header['filename'] = $v_reduce_filename;
			    $p_header['mode'] = $v_perms;
			    $p_header['uid'] = $v_uid;
			    $p_header['gid'] = $v_gid;
			    $p_header['size'] = $v_size;
			    $p_header['mtime'] = $v_mtime;
			    $p_header['typeflag'] = $v_typeflag;
			    $p_header['status'] = "added";
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleFooter()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleFooter($p_tar, $p_mode)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleFooter", "tar='$p_tar', p_mode=$p_mode");
			    $v_result=1;
			
			    // ----- Write the last 0 filled block for end of archive
			    $v_binary_data = pack("a512", "");
			    if ($p_mode == "tar")
			      fputs($p_tar, $v_binary_data);
			    else
			      gzputs($p_tar, $v_binary_data);
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleExtract()
			  // Description :
			  // Parameters :
			  //   $p_tarname : Filename of the tar (or tgz) archive
			  //   $p_file_list : An array which contains the list of files to extract, this
			  //                  array may be empty when $p_mode is 'complete'
			  //   $p_list_detail : An array where will be placed the properties of  each extracted/listed file
			  //   $p_mode : 'complete' will extract all files from the archive,
			  //             'partial' will look for files in $p_file_list
			  //             'list' will only list the files from the archive without any extract
			  //   $p_path : Path to add while writing the extracted files
			  //   $p_tar_mode : 'tar' for GNU TAR archive, 'tgz' for compressed archive
			  //   $p_remove_path : Path to remove (from the file memorized path) while writing the
			  //                    extracted files. If the path does not match the file path,
			  //                    the file is extracted with its memorized path.
			  //                    $p_remove_path does not apply to 'list' mode.
			  //                    $p_path and $p_remove_path are commulative.
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleExtract($p_tarname, $p_file_list, &$p_list_detail, $p_mode, $p_path, $p_tar_mode, $p_remove_path)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleExtract", "archive='$p_tarname', list, mode=$p_mode, path=$p_path, tar_mode=$p_tar_mode, remove_path='$p_remove_path'");
			    $v_result=1;
			    $v_nb = 0;
			    $v_extract_all = TRUE;
			    $v_listing = FALSE;
			
			    // ----- Check the path
			    if (($p_path == "") || ((substr($p_path, 0, 1) != "/") && (substr($p_path, 0, 2) != "./") && (substr($p_path, 0, 3) != "../")))
			      $p_path = "./".$p_path;
			
			    // ----- Look for path to remove format (should end by /)
			    if (($p_remove_path != "") && (substr($p_remove_path, -1) != '/'))
			    {
			      $p_remove_path .= '/';
			    }
			    $p_remove_path_size = strlen($p_remove_path);
			
			    // ----- Study the mode
			    switch ($p_mode) {
			      case "complete" :
			        // ----- Flag extract of all files
			        $v_extract_all = TRUE;
			        $v_listing = FALSE;
			      break;
			      case "partial" :
			          // ----- Flag extract of specific files
			          $v_extract_all = FALSE;
			          $v_listing = FALSE;
			      break;
			      case "list" :
			          // ----- Flag list of all files
			          $v_extract_all = FALSE;
			          $v_listing = TRUE;
			      break;
			      default :
			        // ----- Error log
			        PclErrorLog(-3, "Invalid extract mode ($p_mode)");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			    }
			
			    // ----- Open the tar file
			    if ($p_tar_mode == "tar")
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in binary read mode");
			      $v_tar = fopen($p_tarname, "rb");
			    }
			    else
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in gzip binary read mode");
			      $v_tar = @gzopen($p_tarname, "rb");
			    }
			
			    // ----- Check that the archive is open
			    if ($v_tar == 0)
			    {
			      // ----- Error log
			      PclErrorLog(-2, "Unable to open archive '$p_tarname' in binary read mode");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Read the blocks
			    While (!($v_end_of_file = ($p_tar_mode == "tar"?feof($v_tar):gzeof($v_tar))))
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Looking for next header ...");
			
			      // ----- Clear cache of file infos
			      clearstatcache();
			
			      // ----- Reset extract tag
			      $v_extract_file = FALSE;
			      $v_extraction_stopped = 0;
			
			      // ----- Read the 512 bytes header
			      if ($p_tar_mode == "tar")
			        $v_binary_data = fread($v_tar, 512);
			      else
			        $v_binary_data = gzread($v_tar, 512);
			
			      // ----- Read the header properties
			      if (($v_result = PclTarHandleReadHeader($v_binary_data, $v_header)) != 1)
			      {
			        // ----- Close the archive file
			        if ($p_tar_mode == "tar")
			          fclose($v_tar);
			        else
			          gzclose($v_tar);
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      // ----- Look for empty blocks to skip
			      if ($v_header['filename'] == "")
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Empty block found. End of archive ?");
			        continue;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 2, "Found file '$v_header[filename]', size '$v_header[size]'");
			
			      // ----- Look for partial extract
			      if ((!$v_extract_all) && (is_array($p_file_list)))
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Look if the file '$v_header[filename]' need to be extracted");
			
			        // ----- By default no unzip if the file is not found
			        $v_extract_file = FALSE;
			
			        // ----- Look into the file list
			        for ($i=0; $i<sizeof($p_file_list); $i++)
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "Compare archived file '$v_header[filename]' from asked list file '".$p_file_list[$i]."'");
			
			          // ----- Look if it is a directory
			          if (substr($p_file_list[$i], -1) == "/")
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "Compare file '$v_header[filename]' with directory '$p_file_list[$i]'");
			
			            // ----- Look if the directory is in the filename path
			            if ((strlen($v_header['filename']) > strlen($p_file_list[$i])) && (substr($v_header['filename'], 0, strlen($p_file_list[$i])) == $p_file_list[$i]))
			            {
			              // ----- The file is in the directory, so extract it
			              TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' is in directory '$p_file_list[$i]' : extract it");
			              $v_extract_file = TRUE;
			
			              // ----- End of loop
			              break;
			            }
			          }
			
			          // ----- It is a file, so compare the file names
			          else if ($p_file_list[$i] == $v_header['filename'])
			          {
			            // ----- File found
			            TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' should be extracted");
			            $v_extract_file = TRUE;
			
			            // ----- End of loop
			            break;
			          }
			        }
			
			        // ----- Trace
			        if (!$v_extract_file)
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' should not be extracted");
			        }
			      }
			      else
			      {
			        // ----- All files need to be extracted
			        $v_extract_file = TRUE;
			      }
			
			      // ----- Look if this file need to be extracted
			      if (($v_extract_file) && (!$v_listing))
			      {
			        // ----- Look for path to remove
			        if (($p_remove_path != "")
			            && (substr($v_header['filename'], 0, $p_remove_path_size) == $p_remove_path))
			        {
			          TrFctMessage(__FILE__, __LINE__, 3, "Found path '$p_remove_path' to remove in file '$v_header[filename]'");
			          // ----- Remove the path
			          $v_header['filename'] = substr($v_header['filename'], $p_remove_path_size);
			          TrFctMessage(__FILE__, __LINE__, 3, "Reslting file is '$v_header[filename]'");
			        }
			
			        // ----- Add the path to the file
			        if (($p_path != "./") && ($p_path != "/"))
			        {
			          // ----- Look for the path end '/'
			          while (substr($p_path, -1) == "/")
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "Destination path [$p_path] ends by '/'");
			            $p_path = substr($p_path, 0, strlen($p_path)-1);
			            TrFctMessage(__FILE__, __LINE__, 3, "Modified to [$p_path]");
			          }
			
			          // ----- Add the path
			          if (substr($v_header['filename'], 0, 1) == "/")
			              $v_header['filename'] = $p_path.$v_header['filename'];
			          else
			            $v_header['filename'] = $p_path."/".$v_header['filename'];
			        }
			
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Extracting file (with path) '$v_header[filename]', size '$v_header[size]'");
			
			        // ----- Check that the file does not exists
			        if (file_exists($v_header['filename']))
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' already exists");
			
			          // ----- Look if file is a directory
			          if (is_dir($v_header['filename']))
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is a directory");
			
			            // ----- Change the file status
			            $v_header['status'] = "already_a_directory";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			          // ----- Look if file is write protected
			          else if (!is_writeable($v_header['filename']))
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is write protected");
			
			            // ----- Change the file status
			            $v_header['status'] = "write_protected";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			          // ----- Look if the extracted file is older
			          else if (filemtime($v_header['filename']) > $v_header['mtime'])
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is newer (".date("l dS of F Y h:i:s A", filemtime($v_header[filename])).") than the extracted file (".date("l dS of F Y h:i:s A", $v_header['mtime']).")");
			
			            // ----- Change the file status
			            $v_header['status'] = "newer_exist";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			        }
			
			        // ----- Check the directory availability and create it if necessary
			        else
			        {
			          if ($v_header['typeflag']=="5")
			            $v_dir_to_check = $v_header['filename'];
			          else if (!strstr($v_header['filename'], "/"))
			            $v_dir_to_check = "";
			          else
			            $v_dir_to_check = dirname($v_header['filename']);
			
			          if (($v_result = PclTarHandlerDirCheck($v_dir_to_check)) != 1)
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Unable to create path for '$v_header[filename]'");
			
			            // ----- Change the file status
			            $v_header['status'] = "path_creation_fail";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			        }
			        // ----- Do the extraction
			        if (($v_extract_file) && ($v_header['typeflag']!="5"))
			        {
			          // ----- Open the destination file in write mode
			          if (($v_dest_file = @fopen($v_header['filename'], "wb")) == 0)
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Error while opening '$v_header[filename]' in write binary mode");
			
			            // ----- Change the file status
			            $v_header['status'] = "write_error";
			
			            // ----- Jump to next file
			            TrFctMessage(__FILE__, __LINE__, 2, "Jump to next file");
			            if ($p_tar_mode == "tar")
			              fseek($v_tar, ftell($v_tar)+(ceil(($v_header['size']/512))*512));
			            else
			              gzseek($v_tar, gztell($v_tar)+(ceil(($v_header['size']/512))*512));
			          }
			          else
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Start extraction of '$v_header[filename]'");
			
			            // ----- Read data
			            $n = floor($v_header['size']/512);
			            for ($i=0; $i<$n; $i++)
			            {
			              TrFctMessage(__FILE__, __LINE__, 3, "Read complete 512 bytes block number ".($i+1));
			              if ($p_tar_mode == "tar")
			                $v_content = fread($v_tar, 512);
			              else
			                $v_content = gzread($v_tar, 512);
			              fwrite($v_dest_file, $v_content, 512);
			            }
			            if (($v_header['size'] % 512) != 0)
			            {
			              TrFctMessage(__FILE__, __LINE__, 3, "Read last ".($v_header['size'] % 512)." bytes in a 512 block");
			              if ($p_tar_mode == "tar")
			                $v_content = fread($v_tar, 512);
			              else
			                $v_content = gzread($v_tar, 512);
			              fwrite($v_dest_file, $v_content, ($v_header['size'] % 512));
			            }
			
			            // ----- Close the destination file
			            fclose($v_dest_file);
			
			            // ----- Change the file mode, mtime
			            touch($v_header['filename'], $v_header['mtime']);
			            //chmod($v_header[filename], DecOct($v_header[mode]));
			          }
			
			          // ----- Check the file size
			          clearstatcache();
			          if (filesize($v_header['filename']) != $v_header['size'])
			          {
			            // ----- Close the archive file
			            if ($p_tar_mode == "tar")
			              fclose($v_tar);
			            else
			              gzclose($v_tar);
			
			            // ----- Error log
			            PclErrorLog(-7, "Extracted file '" . $v_header['filename'] . "' does not have the correct file size '".filesize($v_filename)."' ('$v_header[size]' expected). Archive may be corrupted.");
			
			            // ----- Return
			            TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			            return PclErrorCode();
			          }
			
			          // ----- Trace
			          TrFctMessage(__FILE__, __LINE__, 2, "Extraction done");
			        }
			
			        else
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "Extraction of file '$v_header[filename]' skipped.");
			
			          // ----- Jump to next file
			          TrFctMessage(__FILE__, __LINE__, 2, "Jump to next file");
			          if ($p_tar_mode == "tar")
			            fseek($v_tar, ftell($v_tar)+(ceil(($v_header['size']/512))*512));
			          else
			            gzseek($v_tar, gztell($v_tar)+(ceil(($v_header['size']/512))*512));
			        }
			      }
			
			      // ----- Look for file that is not to be unzipped
			      else
			      {
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Jump file '$v_header[filename]'");
			        TrFctMessage(__FILE__, __LINE__, 4, "Position avant jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			
			        // ----- Jump to next file
			        if ($p_tar_mode == "tar")
			          fseek($v_tar, ($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))+(ceil(($v_header[size]/512))*512));
			        else
			          gzseek($v_tar, gztell($v_tar)+(ceil(($v_header[size]/512))*512));
			
			        TrFctMessage(__FILE__, __LINE__, 4, "Position apr�s jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			      }
			
			      if ($p_tar_mode == "tar")
			        $v_end_of_file = feof($v_tar);
			      else
			        $v_end_of_file = gzeof($v_tar);
			
			      // ----- File name and properties are logged if listing mode or file is extracted
			      if ($v_listing || $v_extract_file || $v_extraction_stopped)
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Memorize info about file '$v_header[filename]'");
			
			        // ----- Log extracted files
			        if (($v_file_dir = dirname($v_header['filename'])) == $v_header['filename'])
			          $v_file_dir = "";
			        if ((substr($v_header['filename'], 0, 1) == "/") && ($v_file_dir == ""))
			          $v_file_dir = "/";
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			
			        // ----- Increment
			        $v_nb++;
			      }
			    }
			
			    // ----- Close the tarfile
			    if ($p_tar_mode == "tar")
			      fclose($v_tar);
			    else
			      gzclose($v_tar);
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleExtractByIndexList()
			  // Description :
			  //   Extract the files which are at the indexes specified. If the 'file' at the
			  //   index is a directory, the directory only is created, not all the files stored
			  //   for that directory.
			  // Parameters :
			  //   $p_index_string : String of indexes of files to extract. The form of the
			  //                     string is "0,4-6,8-12" with only numbers and '-' for
			  //                     for range, and ',' to separate ranges. No spaces or ';'
			  //                     are allowed.
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleExtractByIndexList($p_tarname, $p_index_string, &$p_list_detail, $p_path, $p_remove_path, $p_tar_mode)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleExtractByIndexList", "archive='$p_tarname', index_string='$p_index_string', list, path=$p_path, remove_path='$p_remove_path', tar_mode=$p_tar_mode");
			    $v_result=1;
			    $v_nb = 0;
			
			    // ----- TBC : I should check the string by a regexp
			
			    // ----- Check the path
			    if (($p_path == "") || ((substr($p_path, 0, 1) != "/") && (substr($p_path, 0, 3) != "../") && (substr($p_path, 0, 2) != "./")))
			      $p_path = "./".$p_path;
			
			    // ----- Look for path to remove format (should end by /)
			    if (($p_remove_path != "") && (substr($p_remove_path, -1) != '/'))
			    {
			      $p_remove_path .= '/';
			    }
			    $p_remove_path_size = strlen($p_remove_path);
			
			    // ----- Open the tar file
			    if ($p_tar_mode == "tar")
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in binary read mode");
			      $v_tar = @fopen($p_tarname, "rb");
			    }
			    else
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in gzip binary read mode");
			      $v_tar = @gzopen($p_tarname, "rb");
			    }
			
			    // ----- Check that the archive is open
			    if ($v_tar == 0)
			    {
			      // ----- Error log
			      PclErrorLog(-2, "Unable to open archive '$p_tarname' in binary read mode");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Manipulate the index list
			    $v_list = explode(",", $p_index_string);
			    sort($v_list);
			
			    // ----- Loop on the index list
			    $v_index=0;
			    for ($i=0; ($i<sizeof($v_list)) && ($v_result); $i++)
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Looking for index part '$v_list[$i]'");
			
			      // ----- Extract range
			      $v_index_list = explode("-", $v_list[$i]);
			      $v_size_index_list = sizeof($v_index_list);
			      if ($v_size_index_list == 1)
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "Only one index '$v_index_list[0]'");
			
			        // ----- Do the extraction
			        $v_result = PclTarHandleExtractByIndex($v_tar, $v_index, $v_index_list[0], $v_index_list[0], $p_list_detail, $p_path, $p_remove_path, $p_tar_mode);
			      }
			      else if ($v_size_index_list == 2)
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "Two indexes '$v_index_list[0]' and '$v_index_list[1]'");
			
			        // ----- Do the extraction
			        $v_result = PclTarHandleExtractByIndex($v_tar, $v_index, $v_index_list[0], $v_index_list[1], $p_list_detail, $p_path, $p_remove_path, $p_tar_mode);
			      }
			    }
			
			    // ----- Close the tarfile
			    if ($p_tar_mode == "tar")
			      fclose($v_tar);
			    else
			      gzclose($v_tar);
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleExtractByIndex()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleExtractByIndex($p_tar, &$p_index_current, $p_index_start, $p_index_stop, &$p_list_detail, $p_path, $p_remove_path, $p_tar_mode)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleExtractByIndex", "archive_descr='$p_tar', index_current=$p_index_current, index_start='$p_index_start', index_stop='$p_index_stop', list, path=$p_path, remove_path='$p_remove_path', tar_mode=$p_tar_mode");
			    $v_result=1;
			    $v_nb = 0;
			
			    // TBC : I should replace all $v_tar by $p_tar in this function ....
			    $v_tar = $p_tar;
			
			    // ----- Look the number of elements already in $p_list_detail
			    $v_nb = sizeof($p_list_detail);
			
			    // ----- Read the blocks
			    While (!($v_end_of_file = ($p_tar_mode == "tar"?feof($v_tar):gzeof($v_tar))))
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Looking for next file ...");
			      TrFctMessage(__FILE__, __LINE__, 3, "Index current=$p_index_current, range=[$p_index_start, $p_index_stop])");
			
			      if ($p_index_current > $p_index_stop)
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Stop extraction, past stop index");
			        break;
			      }
			
			      // ----- Clear cache of file infos
			      clearstatcache();
			
			      // ----- Reset extract tag
			      $v_extract_file = FALSE;
			      $v_extraction_stopped = 0;
			
			      // ----- Read the 512 bytes header
			      if ($p_tar_mode == "tar")
			        $v_binary_data = fread($v_tar, 512);
			      else
			        $v_binary_data = gzread($v_tar, 512);
			
			      // ----- Read the header properties
			      if (($v_result = PclTarHandleReadHeader($v_binary_data, $v_header)) != 1)
			      {
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      // ----- Look for empty blocks to skip
			      if ($v_header[filename] == "")
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Empty block found. End of archive ?");
			        continue;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 2, "Found file '$v_header[filename]', size '$v_header[size]'");
			
			      // ----- Look if file is in the range to be extracted
			      if (($p_index_current >= $p_index_start) && ($p_index_current <= $p_index_stop))
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' is in the range to be extracted");
			        $v_extract_file = TRUE;
			      }
			      else
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' is out of the range");
			        $v_extract_file = FALSE;
			      }
			
			      // ----- Look if this file need to be extracted
			      if ($v_extract_file)
			      {
			        if (($v_result = PclTarHandleExtractFile($v_tar, $v_header, $p_path, $p_remove_path, $p_tar_mode)) != 1)
			        {
			          // ----- Return
			          TrFctEnd(__FILE__, __LINE__, $v_result);
			          return $v_result;
			        }
			      }
			
			      // ----- Look for file that is not to be extracted
			      else
			      {
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Jump file '$v_header[filename]'");
			        TrFctMessage(__FILE__, __LINE__, 4, "Position avant jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			
			        // ----- Jump to next file
			        if ($p_tar_mode == "tar")
			          fseek($v_tar, ($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))+(ceil(($v_header[size]/512))*512));
			        else
			          gzseek($v_tar, gztell($v_tar)+(ceil(($v_header[size]/512))*512));
			
			        TrFctMessage(__FILE__, __LINE__, 4, "Position apr�s jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			      }
			
			      if ($p_tar_mode == "tar")
			        $v_end_of_file = feof($v_tar);
			      else
			        $v_end_of_file = gzeof($v_tar);
			
			      // ----- File name and properties are logged if listing mode or file is extracted
			      if ($v_extract_file)
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Memorize info about file '$v_header[filename]'");
			
			        // ----- Log extracted files
			        if (($v_file_dir = dirname($v_header[filename])) == $v_header[filename])
			          $v_file_dir = "";
			        if ((substr($v_header[filename], 0, 1) == "/") && ($v_file_dir == ""))
			          $v_file_dir = "/";
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			
			        // ----- Increment
			        $v_nb++;
			      }
			
			      // ----- Increment the current file index
			      $p_index_current++;
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleExtractFile()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleExtractFile($p_tar, &$v_header, $p_path, $p_remove_path, $p_tar_mode)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleExtractFile", "archive_descr='$p_tar', path=$p_path, remove_path='$p_remove_path', tar_mode=$p_tar_mode");
			    $v_result=1;
			
			    // TBC : I should replace all $v_tar by $p_tar in this function ....
			    $v_tar = $p_tar;
			    $v_extract_file = 1;
			
			    $p_remove_path_size = strlen($p_remove_path);
			
			        // ----- Look for path to remove
			        if (($p_remove_path != "")
			            && (substr($v_header[filename], 0, $p_remove_path_size) == $p_remove_path))
			        {
			          TrFctMessage(__FILE__, __LINE__, 3, "Found path '$p_remove_path' to remove in file '$v_header[filename]'");
			          // ----- Remove the path
			          $v_header[filename] = substr($v_header[filename], $p_remove_path_size);
			          TrFctMessage(__FILE__, __LINE__, 3, "Resulting file is '$v_header[filename]'");
			        }
			
			        // ----- Add the path to the file
			        if (($p_path != "./") && ($p_path != "/"))
			        {
			          // ----- Look for the path end '/'
			          while (substr($p_path, -1) == "/")
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "Destination path [$p_path] ends by '/'");
			            $p_path = substr($p_path, 0, strlen($p_path)-1);
			            TrFctMessage(__FILE__, __LINE__, 3, "Modified to [$p_path]");
			          }
			
			          // ----- Add the path
			          if (substr($v_header[filename], 0, 1) == "/")
			              $v_header[filename] = $p_path.$v_header[filename];
			          else
			            $v_header[filename] = $p_path."/".$v_header[filename];
			        }
			
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Extracting file (with path) '$v_header[filename]', size '$v_header[size]'");
			
			        // ----- Check that the file does not exists
			        if (file_exists($v_header[filename]))
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "File '$v_header[filename]' already exists");
			
			          // ----- Look if file is a directory
			          if (is_dir($v_header[filename]))
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is a directory");
			
			            // ----- Change the file status
			            $v_header[status] = "already_a_directory";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			          // ----- Look if file is write protected
			          else if (!is_writeable($v_header[filename]))
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is write protected");
			
			            // ----- Change the file status
			            $v_header[status] = "write_protected";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			          // ----- Look if the extracted file is older
			          else if (filemtime($v_header[filename]) > $v_header[mtime])
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Existing file '$v_header[filename]' is newer (".date("l dS of F Y h:i:s A", filemtime($v_header[filename])).") than the extracted file (".date("l dS of F Y h:i:s A", $v_header[mtime]).")");
			
			            // ----- Change the file status
			            $v_header[status] = "newer_exist";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			        }
			
			        // ----- Check the directory availability and create it if necessary
			        else
			        {
			          if ($v_header[typeflag]=="5")
			            $v_dir_to_check = $v_header[filename];
			          else if (!strstr($v_header[filename], "/"))
			            $v_dir_to_check = "";
			          else
			            $v_dir_to_check = dirname($v_header[filename]);
			
			          if (($v_result = PclTarHandlerDirCheck($v_dir_to_check)) != 1)
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Unable to create path for '$v_header[filename]'");
			
			            // ----- Change the file status
			            $v_header[status] = "path_creation_fail";
			
			            // ----- Skip the extract
			            $v_extraction_stopped = 1;
			            $v_extract_file = 0;
			          }
			        }
			
			        // ----- Do the real bytes extraction (if not a directory)
			        if (($v_extract_file) && ($v_header[typeflag]!="5"))
			        {
			          // ----- Open the destination file in write mode
			          if (($v_dest_file = @fopen($v_header[filename], "wb")) == 0)
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Error while opening '$v_header[filename]' in write binary mode");
			
			            // ----- Change the file status
			            $v_header[status] = "write_error";
			
			            // ----- Jump to next file
			            TrFctMessage(__FILE__, __LINE__, 2, "Jump to next file");
			            if ($p_tar_mode == "tar")
			              fseek($v_tar, ftell($v_tar)+(ceil(($v_header[size]/512))*512));
			            else
			              gzseek($v_tar, gztell($v_tar)+(ceil(($v_header[size]/512))*512));
			          }
			          else
			          {
			            TrFctMessage(__FILE__, __LINE__, 2, "Start extraction of '$v_header[filename]'");
			
			            // ----- Read data
			            $n = floor($v_header[size]/512);
			            for ($i=0; $i<$n; $i++)
			            {
			              TrFctMessage(__FILE__, __LINE__, 3, "Read complete 512 bytes block number ".($i+1));
			              if ($p_tar_mode == "tar")
			                $v_content = fread($v_tar, 512);
			              else
			                $v_content = gzread($v_tar, 512);
			              fwrite($v_dest_file, $v_content, 512);
			            }
			            if (($v_header[size] % 512) != 0)
			            {
			              TrFctMessage(__FILE__, __LINE__, 3, "Read last ".($v_header[size] % 512)." bytes in a 512 block");
			              if ($p_tar_mode == "tar")
			                $v_content = fread($v_tar, 512);
			              else
			                $v_content = gzread($v_tar, 512);
			              fwrite($v_dest_file, $v_content, ($v_header[size] % 512));
			            }
			
			            // ----- Close the destination file
			            fclose($v_dest_file);
			
			            // ----- Change the file mode, mtime
			            touch($v_header[filename], $v_header[mtime]);
			            //chmod($v_header[filename], DecOct($v_header[mode]));
			          }
			
			          // ----- Check the file size
			          clearstatcache();
			          if (filesize($v_header[filename]) != $v_header[size])
			          {
			            // ----- Error log
			            PclErrorLog(-7, "Extracted file '$v_header[filename]' does not have the correct file size '".filesize($v_filename)."' ('$v_header[size]' expected). Archive may be corrupted.");
			
			            // ----- Return
			            TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			            return PclErrorCode();
			          }
			
			          // ----- Trace
			          TrFctMessage(__FILE__, __LINE__, 2, "Extraction done");
			        }
			        else
			        {
			          TrFctMessage(__FILE__, __LINE__, 2, "Extraction of file '$v_header[filename]' skipped.");
			
			          // ----- Jump to next file
			          TrFctMessage(__FILE__, __LINE__, 2, "Jump to next file");
			          if ($p_tar_mode == "tar")
			            fseek($v_tar, ftell($v_tar)+(ceil(($v_header[size]/512))*512));
			          else
			            gzseek($v_tar, gztell($v_tar)+(ceil(($v_header[size]/512))*512));
			        }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleDelete()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleDelete($p_tarname, $p_file_list, &$p_list_detail, $p_tar_mode)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleDelete", "archive='$p_tarname', list, tar_mode=$p_tar_mode");
			    $v_result=1;
			    $v_nb=0;
			
			    // ----- Look for regular tar file
			    if ($p_tar_mode == "tar")
			    {
			      // ----- Open file
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in binary read mode");
			      if (($v_tar = @fopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @fopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        fclose($v_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			    }
			
			    // ----- Look for compressed tar file
			    else
			    {
			      // ----- Open the file in read mode
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in gzip binary read mode");
			      if (($v_tar = @gzopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @gzopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        gzclose($v_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			    }
			
			    // ----- Read the blocks
			    While (!($v_end_of_file = ($p_tar_mode == "tar"?feof($v_tar):gzeof($v_tar))))
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Looking for next header ...");
			
			      // ----- Clear cache of file infos
			      clearstatcache();
			
			      // ----- Reset delete tag
			      $v_delete_file = FALSE;
			
			      // ----- Read the first 512 block header
			      if ($p_tar_mode == "tar")
			        $v_binary_data = fread($v_tar, 512);
			      else
			        $v_binary_data = gzread($v_tar, 512);
			
			      // ----- Read the header properties
			      if (($v_result = PclTarHandleReadHeader($v_binary_data, $v_header)) != 1)
			      {
			        // ----- Close the archive file
			        if ($p_tar_mode == "tar")
			        {
			          fclose($v_tar);
			          fclose($v_temp_tar);
			        }
			        else
			        {
			          gzclose($v_tar);
			          gzclose($v_temp_tar);
			        }
			        @unlink($v_temp_tarname);
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      // ----- Look for empty blocks to skip
			      if ($v_header[filename] == "")
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Empty block found. End of archive ?");
			        continue;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 2, "Found file '$v_header[filename]', size '$v_header[size]'");
			
			      // ----- Look for filenames to delete
			      for ($i=0, $v_delete_file=FALSE; ($i<sizeof($p_file_list)) && (!$v_delete_file); $i++)
			      {
			        // ----- Compare the file names
			//        if ($p_file_list[$i] == $v_header[filename])
			        if (($v_len = strcmp($p_file_list[$i], $v_header[filename])) <= 0)
			        {
			          if ($v_len==0)
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "Found that '$v_header[filename]' need to be deleted");
			            $v_delete_file = TRUE;
			          }
			          else
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "Look if '$v_header[filename]' is a file in $p_file_list[$i]");
			            if (substr($v_header[filename], strlen($p_file_list[$i]), 1) == "/")
			            {
			              TrFctMessage(__FILE__, __LINE__, 3, "'$v_header[filename]' is a file in $p_file_list[$i]");
			              $v_delete_file = TRUE;
			            }
			          }
			        }
			      }
			
			      // ----- Copy files that do not need to be deleted
			      if (!$v_delete_file)
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Keep file '$v_header[filename]'");
			
			        // ----- Write the file header
			        if ($p_tar_mode == "tar")
			        {
			          fputs($v_temp_tar, $v_binary_data, 512);
			        }
			        else
			        {
			          gzputs($v_temp_tar, $v_binary_data, 512);
			        }
			
			        // ----- Write the file data
			        $n = ceil($v_header[size]/512);
			        for ($i=0; $i<$n; $i++)
			        {
			          TrFctMessage(__FILE__, __LINE__, 3, "Read complete 512 bytes block number ".($i+1));
			          if ($p_tar_mode == "tar")
			          {
			            $v_content = fread($v_tar, 512);
			            fwrite($v_temp_tar, $v_content, 512);
			          }
			          else
			          {
			            $v_content = gzread($v_tar, 512);
			            gzwrite($v_temp_tar, $v_content, 512);
			          }
			        }
			
			        // ----- File name and properties are logged if listing mode or file is extracted
			        TrFctMessage(__FILE__, __LINE__, 2, "Memorize info about file '$v_header[filename]'");
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			        $p_list_detail[$v_nb][status] = "ok";
			
			        // ----- Increment
			        $v_nb++;
			      }
			
			      // ----- Look for file that is to be deleted
			      else
			      {
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Start deletion of '$v_header[filename]'");
			        TrFctMessage(__FILE__, __LINE__, 4, "Position avant jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			
			        // ----- Jump to next file
			        if ($p_tar_mode == "tar")
			          fseek($v_tar, ftell($v_tar)+(ceil(($v_header[size]/512))*512));
			        else
			          gzseek($v_tar, gztell($v_tar)+(ceil(($v_header[size]/512))*512));
			
			        TrFctMessage(__FILE__, __LINE__, 4, "Position apr�s jump [".($p_tar_mode=="tar"?ftell($v_tar):gztell($v_tar))."]");
			      }
			
			      // ----- Look for end of file
			      if ($p_tar_mode == "tar")
			        $v_end_of_file = feof($v_tar);
			      else
			        $v_end_of_file = gzeof($v_tar);
			    }
			
			    // ----- Write the last empty buffer
			    PclTarHandleFooter($v_temp_tar, $p_tar_mode);
			
			    // ----- Close the tarfile
			    if ($p_tar_mode == "tar")
			    {
			      fclose($v_tar);
			      fclose($v_temp_tar);
			    }
			    else
			    {
			      gzclose($v_tar);
			      gzclose($v_temp_tar);
			    }
			
			    // ----- Unlink tar file
			    if (!@unlink($p_tarname))
			    {
			      // ----- Error log
			      PclErrorLog(-11, "Error while deleting archive name $p_tarname");
			    }
			
			
			    // ----- Rename tar file
			    if (!@rename($v_temp_tarname, $p_tarname))
			    {
			      // ----- Error log
			      PclErrorLog(-12, "Error while renaming temporary file $v_temp_tarname to archive name $p_tarname");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleUpdate()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleUpdate($p_tarname, $p_file_list, &$p_list_detail, $p_tar_mode, $p_add_dir, $p_remove_dir)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleUpdate", "archive='$p_tarname', list, tar_mode=$p_tar_mode");
			    $v_result=1;
			    $v_nb=0;
			    $v_found_list = array();
			
			    // ----- Look for regular tar file
			    if ($p_tar_mode == "tar")
			    {
			      // ----- Open file
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in binary read mode");
			      if (($v_tar = @fopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @fopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        fclose($v_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			    }
			
			    // ----- Look for compressed tar file
			    else
			    {
			      // ----- Open the file in read mode
			      TrFctMessage(__FILE__, __LINE__, 3, "Open file in gzip binary read mode");
			      if (($v_tar = @gzopen($p_tarname, "rb")) == 0)
			      {
			        // ----- Error log
			        PclErrorLog(-2, "Unable to open file '$p_tarname' in binary read mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			
			      // ----- Open a temporary file in write mode
			      $v_temp_tarname = uniqid("pcltar-").".tmp";
			      TrFctMessage(__FILE__, __LINE__, 2, "Creating temporary archive file $v_temp_tarname");
			      if (($v_temp_tar = @gzopen($v_temp_tarname, "wb")) == 0)
			      {
			        // ----- Close tar file
			        gzclose($v_tar);
			
			        // ----- Error log
			        PclErrorLog(-1, "Unable to open file '$v_temp_tarname' in binary write mode");
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			        return PclErrorCode();
			      }
			    }
			
			    // ----- Prepare the list of files
			    for ($i=0; $i<sizeof($p_file_list); $i++)
			    {
			      // ----- Reset the found list
			      $v_found_list[$i] = 0;
			
			    // ----- Calculate the stored filename
			    $v_stored_list[$i] = $p_file_list[$i];
			    if ($p_remove_dir != "")
			    {
			      if (substr($p_file_list[$i], -1) != '/')
			        $p_remove_dir .= "/";
			
			      if (substr($p_file_list[$i], 0, strlen($p_remove_dir)) == $p_remove_dir)
			      {
			        $v_stored_list[$i] = substr($p_file_list[$i], strlen($p_remove_dir));
			        TrFctMessage(__FILE__, __LINE__, 3, "Remove path '$p_remove_dir' in file '$p_file_list[$i]' = '$v_stored_list[$i]'");
			      }
			    }
			    if ($p_add_dir != "")
			    {
			      if (substr($p_add_dir, -1) == "/")
			        $v_stored_list[$i] = $p_add_dir.$v_stored_list[$i];
			      else
			        $v_stored_list[$i] = $p_add_dir."/".$v_stored_list[$i];
			      TrFctMessage(__FILE__, __LINE__, 3, "Add path '$p_add_dir' in file '$p_file_list[$i]' = '$v_stored_list[$i]'");
			    }
			    $v_stored_list[$i] = PclTarHandlePathReduction($v_stored_list[$i]);
			      TrFctMessage(__FILE__, __LINE__, 3, "After reduction '$v_stored_list[$i]'");
			    }
			
			
			    // ----- Update file cache
			    clearstatcache();
			
			    // ----- Read the blocks
			    While (!($v_end_of_file = ($p_tar_mode == "tar"?feof($v_tar):gzeof($v_tar))))
			    {
			      TrFctMessage(__FILE__, __LINE__, 3, "Looking for next header ...");
			
			      // ----- Clear cache of file infos
			      clearstatcache();
			
			      // ----- Reset current found filename
			      $v_current_filename = "";
			
			      // ----- Reset delete tag
			      $v_delete_file = FALSE;
			
			      // ----- Read the first 512 block header
			      if ($p_tar_mode == "tar")
			        $v_binary_data = fread($v_tar, 512);
			      else
			        $v_binary_data = gzread($v_tar, 512);
			
			      // ----- Read the header properties
			      if (($v_result = PclTarHandleReadHeader($v_binary_data, $v_header)) != 1)
			      {
			        // ----- Close the archive file
			        if ($p_tar_mode == "tar")
			        {
			          fclose($v_tar);
			          fclose($v_temp_tar);
			        }
			        else
			        {
			          gzclose($v_tar);
			          gzclose($v_temp_tar);
			        }
			        @unlink($v_temp_tarname);
			
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, $v_result);
			        return $v_result;
			      }
			
			      // ----- Look for empty blocks to skip
			      if ($v_header[filename] == "")
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Empty block found. End of archive ?");
			        continue;
			      }
			
			      TrFctMessage(__FILE__, __LINE__, 2, "Found file '$v_header[filename]', size '$v_header[size]'");
			
			      // ----- Look for filenames to update
			      for ($i=0, $v_update_file=FALSE, $v_found_file=FALSE; ($i<sizeof($v_stored_list)) && (!$v_update_file); $i++)
			      {
			        TrFctMessage(__FILE__, __LINE__, 4, "Compare with file '$v_stored_list[$i]'");
			
			        // ----- Compare the file names
			        if ($v_stored_list[$i] == $v_header[filename])
			        {
			          TrFctMessage(__FILE__, __LINE__, 3, "File '$v_stored_list[$i]' is present in archive");
			          TrFctMessage(__FILE__, __LINE__, 3, "File '$v_stored_list[$i]' mtime=".filemtime($p_file_list[$i])." ".date("l dS of F Y h:i:s A", filemtime($p_file_list[$i])));
			          TrFctMessage(__FILE__, __LINE__, 3, "Archived mtime=".$v_header[mtime]." ".date("l dS of F Y h:i:s A", $v_header[mtime]));
			
			          // ----- Store found informations
			          $v_found_file = TRUE;
			          $v_current_filename = $p_file_list[$i];
			
			          // ----- Look if the file need to be updated
			          if (filemtime($p_file_list[$i]) > $v_header[mtime])
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "File '$p_file_list[$i]' need to be updated");
			            $v_update_file = TRUE;
			          }
			          else
			          {
			            TrFctMessage(__FILE__, __LINE__, 3, "File '$p_file_list[$i]' does not need to be updated");
			            $v_update_file = FALSE;
			          }
			
			          // ----- Flag the name in order not to add the file at the end
			          $v_found_list[$i] = 1;
			        }
			        else
			        {
			          TrFctMessage(__FILE__, __LINE__, 4, "File '$p_file_list[$i]' is not '$v_header[filename]'");
			        }
			      }
			
			      // ----- Copy files that do not need to be updated
			      if (!$v_update_file)
			      {
			        TrFctMessage(__FILE__, __LINE__, 2, "Keep file '$v_header[filename]'");
			
			        // ----- Write the file header
			        if ($p_tar_mode == "tar")
			        {
			          fputs($v_temp_tar, $v_binary_data, 512);
			        }
			        else
			        {
			          gzputs($v_temp_tar, $v_binary_data, 512);
			        }
			
			        // ----- Write the file data
			        $n = ceil($v_header[size]/512);
			        for ($j=0; $j<$n; $j++)
			        {
			          TrFctMessage(__FILE__, __LINE__, 3, "Read complete 512 bytes block number ".($j+1));
			          if ($p_tar_mode == "tar")
			          {
			            $v_content = fread($v_tar, 512);
			            fwrite($v_temp_tar, $v_content, 512);
			          }
			          else
			          {
			            $v_content = gzread($v_tar, 512);
			            gzwrite($v_temp_tar, $v_content, 512);
			          }
			        }
			
			        // ----- File name and properties are logged if listing mode or file is extracted
			        TrFctMessage(__FILE__, __LINE__, 2, "Memorize info about file '$v_header[filename]'");
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			        $p_list_detail[$v_nb][status] = ($v_found_file?"not_updated":"ok");
			
			        // ----- Increment
			        $v_nb++;
			      }
			
			      // ----- Look for file that need to be updated
			      else
			      {
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Start update of file '$v_current_filename'");
			
			        // ----- Store the old file size
			        $v_old_size = $v_header[size];
			
			        // ----- Add the file
			        if (($v_result = PclTarHandleAddFile($v_temp_tar, $v_current_filename, $p_tar_mode, $v_header, $p_add_dir, $p_remove_dir)) != 1)
			        {
			          // ----- Close the tarfile
			          if ($p_tar_mode == "tar")
			          {
			            fclose($v_tar);
			            fclose($v_temp_tar);
			          }
			          else
			          {
			            gzclose($v_tar);
			            gzclose($v_temp_tar);
			          }
			          @unlink($p_temp_tarname);
			
			          // ----- Return status
			          TrFctEnd(__FILE__, __LINE__, $v_result);
			          return $v_result;
			        }
			
			        // ----- Trace
			        TrFctMessage(__FILE__, __LINE__, 2, "Skip old file '$v_header[filename]'");
			
			        // ----- Jump to next file
			        if ($p_tar_mode == "tar")
			          fseek($v_tar, ftell($v_tar)+(ceil(($v_old_size/512))*512));
			        else
			          gzseek($v_tar, gztell($v_tar)+(ceil(($v_old_size/512))*512));
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			        $p_list_detail[$v_nb][status] = "updated";
			
			        // ----- Increment
			        $v_nb++;
			      }
			
			      // ----- Look for end of file
			      if ($p_tar_mode == "tar")
			        $v_end_of_file = feof($v_tar);
			      else
			        $v_end_of_file = gzeof($v_tar);
			    }
			
			    // ----- Look for files that does not exists in the archive and need to be added
			    for ($i=0; $i<sizeof($p_file_list); $i++)
			    {
			      // ----- Look if file not found in the archive
			      if (!$v_found_list[$i])
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "File '$p_file_list[$i]' need to be added");
			
			        // ----- Add the file
			        if (($v_result = PclTarHandleAddFile($v_temp_tar, $p_file_list[$i], $p_tar_mode, $v_header, $p_add_dir, $p_remove_dir)) != 1)
			        {
			          // ----- Close the tarfile
			          if ($p_tar_mode == "tar")
			          {
			            fclose($v_tar);
			            fclose($v_temp_tar);
			          }
			          else
			          {
			            gzclose($v_tar);
			            gzclose($v_temp_tar);
			          }
			          @unlink($p_temp_tarname);
			
			          // ----- Return status
			          TrFctEnd(__FILE__, __LINE__, $v_result);
			          return $v_result;
			        }
			
			        // ----- Add the array describing the file into the list
			        $p_list_detail[$v_nb] = $v_header;
			        $p_list_detail[$v_nb][status] = "added";
			
			        // ----- Increment
			        $v_nb++;
			      }
			      else
			      {
			        TrFctMessage(__FILE__, __LINE__, 3, "File '$p_file_list[$i]' was already updated if needed");
			      }
			    }
			
			    // ----- Write the last empty buffer
			    PclTarHandleFooter($v_temp_tar, $p_tar_mode);
			
			    // ----- Close the tarfile
			    if ($p_tar_mode == "tar")
			    {
			      fclose($v_tar);
			      fclose($v_temp_tar);
			    }
			    else
			    {
			      gzclose($v_tar);
			      gzclose($v_temp_tar);
			    }
			
			    // ----- Unlink tar file
			    if (!@unlink($p_tarname))
			    {
			      // ----- Error log
			      PclErrorLog(-11, "Error while deleting archive name $p_tarname");
			    }
			
			
			    // ----- Rename tar file
			    if (!@rename($v_temp_tarname, $p_tarname))
			    {
			      // ----- Error log
			      PclErrorLog(-12, "Error while renaming temporary file $v_temp_tarname to archive name $p_tarname");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleReadHeader()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleReadHeader($v_binary_data, &$v_header)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleReadHeader", "");
			    $v_result=1;
			
			    // ----- Read the 512 bytes header
			    /*
			    if ($p_tar_mode == "tar")
			      $v_binary_data = fread($p_tar, 512);
			    else
			      $v_binary_data = gzread($p_tar, 512);
			    */
			
			    // ----- Look for no more block
			    if (strlen($v_binary_data)==0)
			    {
			      $v_header['filename'] = "";
			      $v_header['status'] = "empty";
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, $v_result, "End of archive found");
			      return $v_result;
			    }
			
			    // ----- Look for invalid block size
			    if (strlen($v_binary_data) != 512)
			    {
			      $v_header[filename] = "";
			      $v_header[status] = "invalid_header";
			      TrFctMessage(__FILE__, __LINE__, 2, "Invalid block size : ".strlen($v_binary_data));
			
			      // ----- Error log
			      PclErrorLog(-10, "Invalid block size : ".strlen($v_binary_data));
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Calculate the checksum
			    $v_checksum = 0;
			    // ..... First part of the header
			    for ($i=0; $i<148; $i++)
			    {
			      $v_checksum+=ord(substr($v_binary_data,$i,1));
			    }
			    // ..... Ignore the checksum value and replace it by ' ' (space)
			    for ($i=148; $i<156; $i++)
			    {
			      $v_checksum += ord(' ');
			    }
			    // ..... Last part of the header
			    for ($i=156; $i<512; $i++)
			    {
			      $v_checksum+=ord(substr($v_binary_data,$i,1));
			    }
			    TrFctMessage(__FILE__, __LINE__, 3, "Calculated checksum : $v_checksum");
			
			    // ----- Extract the values
			    TrFctMessage(__FILE__, __LINE__, 2, "Header : '$v_binary_data'");
			    $v_data = unpack("a100filename/a8mode/a8uid/a8gid/a12size/a12mtime/a8checksum/a1typeflag/a100link/a6magic/a2version/a32uname/a32gname/a8devmajor/a8devminor", $v_binary_data);
			
			    // ----- Extract the checksum for check
			    $v_header['checksum'] = OctDec(trim($v_data['checksum']));
			    TrFctMessage(__FILE__, __LINE__, 3, "File checksum : $v_header[checksum]");
			    if ($v_header['checksum'] != $v_checksum)
			    {
			      TrFctMessage(__FILE__, __LINE__, 2, "File checksum is invalid : $v_checksum calculated, $v_header[checksum] expected");
			
			      $v_header['filename'] = "";
			      $v_header['status'] = "invalid_header";
			
			      // ----- Look for last block (empty block)
			      if (($v_checksum == 256) && ($v_header['checksum'] == 0))
			      {
			        $v_header['status'] = "empty";
			        // ----- Return
			        TrFctEnd(__FILE__, __LINE__, $v_result, "End of archive found");
			        return $v_result;
			      }
			
			      // ----- Error log
			      PclErrorLog(-13, "Invalid checksum : $v_checksum calculated, $v_header[checksum] expected");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			    TrFctMessage(__FILE__, __LINE__, 2, "File checksum is valid ($v_checksum)");
			
			    // ----- Extract the properties
			    $v_header['filename'] = trim($v_data['filename']);
			    TrFctMessage(__FILE__, __LINE__, 2, "Name : '$v_header[filename]'");
			    $v_header['mode'] = OctDec(trim($v_data['mode']));
			    TrFctMessage(__FILE__, __LINE__, 2, "Mode : '".DecOct($v_header['mode'])."'");
			    $v_header['uid'] = OctDec(trim($v_data['uid']));
			    TrFctMessage(__FILE__, __LINE__, 2, "Uid : '$v_header[uid]'");
			    $v_header['gid'] = OctDec(trim($v_data['gid']));
			    TrFctMessage(__FILE__, __LINE__, 2, "Gid : '$v_header[gid]'");
			    $v_header['size'] = OctDec(trim($v_data['size']));
			    TrFctMessage(__FILE__, __LINE__, 2, "Size : '$v_header[size]'");
			    $v_header['mtime'] = OctDec(trim($v_data['mtime']));
			    TrFctMessage(__FILE__, __LINE__, 2, "Date : ".date("l dS of F Y h:i:s A", $v_header['mtime']));
			    if (($v_header['typeflag'] = $v_data['typeflag']) == "5")
			    {
			      $v_header['size'] = 0;
			      TrFctMessage(__FILE__, __LINE__, 2, "Size (folder) : '$v_header[size]'");
			    }
			    TrFctMessage(__FILE__, __LINE__, 2, "File typeflag : $v_header[typeflag]");
			    /* ----- All these fields are removed form the header because they do not carry interesting info
			    $v_header[link] = trim($v_data[link]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Linkname : $v_header[linkname]");
			    $v_header[magic] = trim($v_data[magic]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Magic : $v_header[magic]");
			    $v_header[version] = trim($v_data[version]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Version : $v_header[version]");
			    $v_header[uname] = trim($v_data[uname]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Uname : $v_header[uname]");
			    $v_header[gname] = trim($v_data[gname]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Gname : $v_header[gname]");
			    $v_header[devmajor] = trim($v_data[devmajor]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Devmajor : $v_header[devmajor]");
			    $v_header[devminor] = trim($v_data[devminor]);
			    TrFctMessage(__FILE__, __LINE__, 2, "Devminor : $v_header[devminor]");
			    */
			
			    // ----- Set the status field
			    $v_header['status'] = "ok";
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandlerDirCheck()
			  // Description :
			  //   Check if a directory exists, if not it creates it and all the parents directory
			  //   which may be useful.
			  // Parameters :
			  //   $p_dir : Directory path to check (without / at the end).
			  // Return Values :
			  //    1 : OK
			  //   -1 : Unable to create directory
			  // --------------------------------------------------------------------------------
			  function PclTarHandlerDirCheck($p_dir)
			  {
			    $v_result = 1;
			
			    TrFctStart(__FILE__, __LINE__, "PclTarHandlerDirCheck", "$p_dir");
			
			    // ----- Check the directory availability
			    if ((is_dir($p_dir)) || ($p_dir == ""))
			    {
			      TrFctEnd(__FILE__, __LINE__, "'$p_dir' is a directory");
			      return 1;
			    }
			
			    // ----- Look for file alone
			    /*
			    if (!strstr("$p_dir", "/"))
			    {
			      TrFctEnd(__FILE__, __LINE__,  "'$p_dir' is a file with no directory");
			      return 1;
			    }
			    */
			
			    // ----- Extract parent directory
			    $p_parent_dir = dirname($p_dir);
			    TrFctMessage(__FILE__, __LINE__, 3, "Parent directory is '$p_parent_dir'");
			
			    // ----- Just a check
			    if ($p_parent_dir != $p_dir)
			    {
			      // ----- Look for parent directory
			      if ($p_parent_dir != "")
			      {
			        if (($v_result = PclTarHandlerDirCheck($p_parent_dir)) != 1)
			        {
			          TrFctEnd(__FILE__, __LINE__, $v_result);
			          return $v_result;
			        }
			      }
			    }
			
			    // ----- Create the directory
			    TrFctMessage(__FILE__, __LINE__, 3, "Create directory '$p_dir'");
			    if (!@mkdir($p_dir, 0777))
			    {
			      // ----- Error log
			      PclErrorLog(-8, "Unable to create directory '$p_dir'");
			
			      // ----- Return
			      TrFctEnd(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			      return PclErrorCode();
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result, "Directory '$p_dir' created");
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandleExtension()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandleExtension($p_tarname)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandleExtension", "tar=$p_tarname");
			
			    // ----- Look for file extension
			    if ((substr($p_tarname, -7) == ".tar.gz") || (substr($p_tarname, -4) == ".tgz"))
			    {
			      TrFctMessage(__FILE__, __LINE__, 2, "Archive is a gzip tar");
			      $v_tar_mode = "tgz";
			    }
			    else if (substr($p_tarname, -4) == ".tar")
			    {
			      TrFctMessage(__FILE__, __LINE__, 2, "Archive is a tar");
			      $v_tar_mode = "tar";
			    }
			    else
			    {
			      // ----- Error log
			      PclErrorLog(-9, "Invalid archive extension");
			
			      TrFctMessage(__FILE__, __LINE__, PclErrorCode(), PclErrorString());
			
			      $v_tar_mode = "";
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_tar_mode);
			    return $v_tar_mode;
			  }
			  // --------------------------------------------------------------------------------
			
			
			  // --------------------------------------------------------------------------------
			  // Function : PclTarHandlePathReduction()
			  // Description :
			  // Parameters :
			  // Return Values :
			  // --------------------------------------------------------------------------------
			  function PclTarHandlePathReduction($p_dir)
			  {
			    TrFctStart(__FILE__, __LINE__, "PclTarHandlePathReduction", "dir='$p_dir'");
			    $v_result = "";
			
			    // ----- Look for not empty path
			    if ($p_dir != "")
			    {
			      // ----- Explode path by directory names
			      $v_list = explode("/", $p_dir);
			
			      // ----- Study directories from last to first
			      for ($i=sizeof($v_list)-1; $i>=0; $i--)
			      {
			        // ----- Look for current path
			        if ($v_list[$i] == ".")
			        {
			          // ----- Ignore this directory
			          // Should be the first $i=0, but no check is done
			        }
			        else if ($v_list[$i] == "..")
			        {
			          // ----- Ignore it and ignore the $i-1
			          $i--;
			        }
			        else if (($v_list[$i] == "") && ($i!=(sizeof($v_list)-1)) && ($i!=0))
			        {
			          // ----- Ignore only the double '//' in path,
			          // but not the first and last '/'
			        }
			        else
			        {
			          $v_result = $v_list[$i].($i!=(sizeof($v_list)-1)?"/".$v_result:"");
			        }
			      }
			    }
			
			    // ----- Return
			    TrFctEnd(__FILE__, __LINE__, $v_result);
			    return $v_result;
			  }
			  // --------------------------------------------------------------------------------
			
			
			// ----- End of double include look
			}
			/********************* Fin PCL TAR ***********************/
			// Récupération du nom du tar.gz
			$p_tarname = "";
			$d = dir(".");
			while (false !== ($entry = $d->read())) {	   
			   if(	$entry != '.' && $entry != '..') {
			   		$filename = $d->path.'/'.$entry;
			   		if(is_file($filename)) {
				   		$ext = pathinfo($filename, PATHINFO_EXTENSION);
				   		if($ext == "gz") {
				   			$p_tarname = $filename;
				   		}
			   		}
			   }
			}
			$d->close();
			
			if(empty($_POST['rep'])) {
				$p_path = "./";
			} else {
				$p_path = $_POST['rep'];
			}
			$p_remove_path = '';
			$p_mode = '';
		
			// Création du répertoire
			if(!is_dir($p_path)) {
				mkdir($p_path,0755,true);
			}
						
			// Extraction et installation des fichiers
			$lExtract =  PclTarExtract($p_tarname, $p_path, $p_remove_path, $p_mode);
			@unlink($p_tarname); // Supprime l'archive
		} else if(!isset($_GET['rep'])) { // Retour à la Page 1
			header('location:./install.php');
		}
		
		echo $lEntete;	
		
		if(isset($_GET['rep'])) {
			$p_path = $_GET['rep'];
?>

<div class="ui-state-highlight">Echec de la connexion à la Base</div>

<?php 
		}
?>
		<h2>Étape 2 : Base de données</h2>
		<div id="formulaire-bdd" class="ui-widget ui-widget-content ui-corner-all">
		<div class="ui-widget ui-widget-header ui-corner-all">La base de données</div>
			<form action="./install.php?page=3" method="post">
				<table>
					<tr>
						<td>Adresse du server SQL</td>
						<td><input type="text" name="server" id="server"/></td>						
					</tr>
					<tr>
						<td>Login</td>
						<td><input type="text" name="login" id="login"/></td>						
					</tr>
					<tr>
						<td>Mot de passe</td>
						<td><input type="password" name="pass" id="pass"/></td>						
					</tr>
					<tr>
						<td>Nom de la base</td>
						<td><input type="text" name="base" id="base"/></td>						
					</tr>
					<tr>
						<td>Préfixe de la base zeybux</td>
						<td><input type="text" name="prefixe" id="prefixe"/></td>						
					</tr>	
					<tr>
						<td colspan="2" class="center">
							<input type="hidden" name="rep" id="rep" value="<?php echo $p_path; ?>"/>
							<input type="submit" value="Valider" class="ui-button" />
						</td>				
					</tr>			
				</table>
			</form>
		</div>
<?php 
	} else if($_GET["page"] == 3) {
		
		if(isset($_POST["rep"]) && isset($_POST["server"]) && isset($_POST["login"]) && isset($_POST["pass"]) && isset($_POST["base"]) && isset($_POST["prefixe"])) {
			// Test de l'accès à la BDD		
			$lAcces = true;
			$mMysqlHost = $_POST["server"]; // le serveur
			$mMysqlLogin = $_POST["login"]; // le login
			$mMysqlPass = $_POST["pass"]; // mot de passe
			$mMysqlDbnom = $_POST["base"]; // nom de la base de donnee
						
			$lDb = @mysql_connect($mMysqlHost,$mMysqlLogin,$mMysqlPass);
			if(!$lDb) {		
				$lAcces = false;
			} else {
				if (!@mysql_select_db($mMysqlDbnom,$lDb)) {
					$lAcces = false;
				} else {
					$lRs = @mysql_query("SET NAMES UTF8"); // Permet d'initer une connexion en UTF-8 avec la BDD
					if (!$lRs) {
						$lAcces = false;
				    }
				}	
			}
				
			if(!$lAcces) { // Connexion KO
				header('location:./install.php?page=2&rep=' . $_POST["rep"]);
			}
			
			if(!@mysql_close($lDb)) {					
				die(mysql_error());
			}
				
			
			// Ajout du fichier de config d'accès à la BDD
			$fp = fopen($_POST["rep"] . '/configuration/DB.php', 'w');
			fwrite($fp,"<?php\n");
			fwrite($fp,"//****************************************************************\n");
			fwrite($fp,"//\n");
			fwrite($fp,"// Createur : Julien PIERRE\n");
			fwrite($fp,"// Date de creation : 25/01/2010\n");
			fwrite($fp,"// Fichier : DB.php\n");
			fwrite($fp,"//\n");
			fwrite($fp,"// Description : Informations de configuration pour la connexion à la base de données\n");
			fwrite($fp,"//\n");
			fwrite($fp,"//****************************************************************\n");
			fwrite($fp,"define(\"MYSQL_DB_PREFIXE\", \"" . $_POST["prefixe"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_HOST\", \"" . $_POST["server"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_LOGIN\", \"" . $_POST["login"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_PASS\", \"" . $_POST["pass"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_DBNOM\", \"" . $_POST["base"] . "\");\n");
			fwrite($fp,"?>\n");			
			fclose($fp);
			
			// Ajout du fichier de config d'accès à la BDD
			$fp = fopen($_POST["rep"] . '/Maintenance/DB.php', 'w');
			fwrite($fp,"<?php\n");
			fwrite($fp,"//****************************************************************\n");
			fwrite($fp,"//\n");
			fwrite($fp,"// Createur : Julien PIERRE\n");
			fwrite($fp,"// Date de creation : 25/01/2010\n");
			fwrite($fp,"// Fichier : DB.php\n");
			fwrite($fp,"//\n");
			fwrite($fp,"// Description : Informations de configuration pour la connexion à la base de données\n");
			fwrite($fp,"//\n");
			fwrite($fp,"//****************************************************************\n");
			fwrite($fp,"define(\"MYSQL_DB_PREFIXE\", \"" . $_POST["prefixe"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_HOST\", \"" . $_POST["server"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_LOGIN\", \"" . $_POST["login"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_PASS\", \"" . $_POST["pass"] . "\");\n");
			fwrite($fp,"define(\"MYSQL_DBNOM\", \"" . $_POST["base"] . "\");\n");
			fwrite($fp,"?>\n");			
			fclose($fp);

			// Installation de la BDD
			$connexion = mysql_connect($_POST["server"], $_POST["login"], $_POST["pass"]);
			mysql_select_db($_POST["base"], $connexion);
			$lRequete = file_get_contents($_POST["rep"] . "/install.sql");
			
			// Ajout du préfixe
			$lRequete=str_replace('{PREFIXE}', $_POST["prefixe"], $lRequete);
			
			$lRequetes = explode(";\n", $lRequete);	
			$lNbErreur = 0;
			mysql_query("SET NAMES UTF8"); // Permet d'initer une connexion en UTF-8 avec la BDD
			
			foreach( $lRequetes as $lReq ) {
				if(!mysql_query($lReq, $connexion)) {
					$lNbErreur++;
				}
			}
			mysql_close($connexion);	
			$p_prefixe = $_POST["prefixe"];
			$p_path = $_POST["rep"];
			
			unlink($_POST["rep"] . "/install.sql"); // Supprime install.sql
		} else if(!isset($_GET['rep']) || !isset($_GET['prefixe'])){ // Retour à la Page 2
			header('location:./install.php?page=2');
		}	
		
		echo $lEntete;	
		
		if(isset($_GET['rep']) && isset($_GET['prefixe'])) {
			$p_path = $_GET["rep"];
			$p_prefixe = $_GET["prefixe"];
			
			if(isset($_GET['mdp'])) {
?>
<div class="ui-state-highlight">Erreur de mot de passe sur le compte : <?php echo $_GET['mdp']; ?></div>
<?php 			
			} else {
?>
<div class="ui-state-highlight">Remplir l'ensemble des comptes</div>
<?php 
			}
		}
?>

		<h2>Étape 3 : Comptes</h2>
		<div id="formulaire-caisse" class="ui-widget ui-widget-content ui-corner-all">
			<div class="ui-widget ui-widget-header ui-corner-all">Les comptes</div>
			<form action="./install.php?page=4" method="post">
				<table>
					<tr>
						<td colspan="2" class="ui-widget-header">Administrateur</td>		
					</tr>
					<tr>
						<td>Login</td>
						<td><input type="text" name="admin-login" id="admin-login"/></td>						
					</tr>
					<tr>
						<td>Mot de passe</td>
						<td><input type="password" name="admin-pass" id="admin-pass"/></td>						
					</tr>
					<tr>
						<td>Resaisir le mot de passe</td>
						<td><input type="password" name="admin-confirm-pass" id="admin-confirm-pass"/></td>						
					</tr>
					<tr>
						<td colspan="2" class="ui-widget-header">Mail</td>		
					</tr>
					<tr>
						<td>Adresse mail</td>
						<td><input type="text" name="mailSupport" id="mailSupport"/></td>						
					</tr>
					<tr>
						<td>Mailing liste</td>
						<td><input type="text" name="mailingListe" id="mailingListe"/></td>						
					</tr>
					<tr>
						<td>Domaine des mailing liste</td>
						<td><input type="text" name="mailingListeDomain" id="mailingListeDomain"/></td>						
					</tr>
					<tr>
						<td colspan="2" class="ui-widget-header">Compte OVH : Accès WebServices</td>		
					</tr>
					<tr>
						<td>Adresse du WebService</td>
						<td><input type="text" name="adresseWSDL" id="adresseWSDL"/></td>						
					</tr>
					<tr>
						<td>Login</td>
						<td><input type="text" name="soapLogin" id="soapLogin"/></td>						
					</tr>
					<tr>
						<td>Mot de passe</td>
						<td><input type="text" name="soapPass" id="soapPass"/></td>						
					</tr>
					
					<tr>
						<td colspan="2" class="ui-widget-header">Proprietaire Zeybux</td>		
					</tr>
					<tr>
						<td>Nom</td>
						<td><input type="text" name="propNom" id="propNom"/></td>						
					</tr>
					<tr>
						<td>Adresse</td>
						<td><input type="text" name="propAdresse" id="propAdresse"/></td>						
					</tr>
					<tr>
						<td>Code Postal</td>
						<td><input type="text" name="propCP" id="propCP"/></td>						
					</tr>
					<tr>
						<td>Ville</td>
						<td><input type="text" name="propVille" id="propVille"/></td>						
					</tr>
					<tr>
						<td>Téléphone</td>
						<td><input type="text" name="propTel" id="propTel"/></td>						
					</tr>
					<tr>
						<td>Courriel</td>
						<td><input type="text" name="propMail" id="propMail"/></td>						
					</tr>
										
					<tr>
						<td colspan="2" class="center">
							<input type="hidden" name="rep" id="rep" value="<?php echo $p_path; ?>"/>
							<input type="hidden" name="prefixe" id="prefixe" value="<?php echo $p_prefixe; ?>"/>
							<input type="submit" value="Valider" class="ui-button" />
						</td>				
					</tr>			
				</table>
			</form>
		</div>
<?php 
	} else if($_GET["page"] == 4) {
		if(	isset($_POST['admin-login']) && isset($_POST['admin-pass']) && isset($_POST['admin-confirm-pass'])
			&& isset($_POST['mailSupport']) && isset($_POST['mailingListe']) && isset($_POST['mailingListeDomain'])
			&& isset($_POST['adresseWSDL']) && isset($_POST['soapLogin']) && isset($_POST['soapPass'])
			&& isset($_POST['propNom']) && isset($_POST['propAdresse']) && isset($_POST['propCP'])
			&& isset($_POST['propVille']) && isset($_POST['propTel']) && isset($_POST['propMail'])

			&& isset($_POST['rep']) && isset($_POST['prefixe'])) {
		
			if(	empty($_POST['admin-login']) || empty($_POST['admin-pass']) || empty($_POST['admin-confirm-pass']) 
				&& empty($_POST['mailSupport']) || empty($_POST['mailingListe']) || empty($_POST['mailingListeDomain'])		
				|| empty($_POST['adresseWSDL'])|| empty($_POST['soapLogin'])|| empty($_POST['soapPass'])	
			) {	
				header('location:./install.php?page=3&rep=' . $_POST['rep'] . '&prefixe=' . $_POST["prefixe"]);
			} else {
				
				if( $_POST['admin-pass'] !== $_POST['admin-confirm-pass'] ) {
						header('location:./install.php?page=3&mdp=admin&rep=' . $_POST['rep'] . '&prefixe=' . $_POST["prefixe"]);
				} else {				
					require_once($_POST["rep"] . '/configuration/DB.php');
					
					$connexion = mysql_connect(MYSQL_HOST, MYSQL_LOGIN, MYSQL_PASS);
					mysql_select_db(MYSQL_DBNOM, $connexion);
				  	mysql_query("SET NAMES UTF8"); // Permet d'initer une connexion en UTF-8 avec la BDD
					// Création de l'admin
					$lRequete =
					"INSERT INTO " . $_POST['prefixe'] . "ide_identification
						(ide_id
						,ide_id_login
						,ide_login
						,ide_pass
						,ide_type
						,ide_autorise)
					VALUES (NULL
						,'0'
						,'" . $_POST['admin-login'] . "'
						,'" . md5($_POST['admin-pass']) . "'
						,'2'
						,'1')";
					mysql_query($lRequete, $connexion);					
					mysql_close($connexion);
					
					// Ajout du fichier de config des Mails
					$fp = fopen($_POST["rep"] . '/configuration/Mail.php', 'w');
					fwrite($fp,"<?php\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Createur : Julien PIERRE\n");
					fwrite($fp,"// Date de creation : 23/01/2012\n");
					fwrite($fp,"// Fichier : Mail.php\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Description : Les constantes de mail\n");
					fwrite($fp,"//\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"define(\"MAIL_SUPPORT\", \"" . $_POST["mailSupport"] . "\");\n");
					fwrite($fp,"define(\"MAIL_MAILING_LISTE\", \"" . $_POST["mailingListe"] . "\");\n");
					fwrite($fp,"define(\"MAIL_MAILING_LISTE_DOMAIN\", \"" . $_POST["mailingListeDomain"] . "\");\n");
					fwrite($fp,"?>\n");			
					fclose($fp);
					
					// Ajout du fichier de config des WebServices
					$fp = fopen($_POST["rep"] . '/configuration/SOAP.php', 'w');
					fwrite($fp,"<?php\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Createur : Julien PIERRE\n");
					fwrite($fp,"// Date de creation : 23/01/2012\n");
					fwrite($fp,"// Fichier : SOAP.php\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Description : Les constantes de WebServices\n");
					fwrite($fp,"//\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"define(\"ADRESSE_WSDL\", \"" . $_POST["adresseWSDL"] . "\");\n");
					fwrite($fp,"define(\"SOAP_LOGIN\", \"" . $_POST["soapLogin"] . "\");\n");
					fwrite($fp,"define(\"SOAP_PASS\", \"" . $_POST["soapPass"] . "\");\n");
					fwrite($fp,"?>\n");
					fclose($fp);
					
					// Ajout du fichier de config du niveau de Log
					$fp = fopen($_POST["rep"] . '/configuration/LogLevel.php', 'w');
					fwrite($fp,"<?php\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Createur : Julien PIERRE\n");
					fwrite($fp,"// Date de creation : 22/04/2012\n");
					fwrite($fp,"// Fichier : LogLevel.php\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Description : Le niveau de debug du site\n");
					fwrite($fp,"//\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"// Définition du level de log\n");
					fwrite($fp,"define(\"LOG_LEVEL\",PEAR_LOG_INFO);\n");
					fwrite($fp,"?>\n");
					fclose($fp);

					// Ajout du fichier de config du niveau de Log
					$fp = fopen($_POST["rep"] . '/configuration/Proprietaire.php', 'w');
					fwrite($fp,"<?php\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Createur : Julien PIERRE\n");
					fwrite($fp,"// Date de creation : 27/04/2013\n");
					fwrite($fp,"// Fichier : Proprietaire.php\n");
					fwrite($fp,"//\n");
					fwrite($fp,"// Description : Les informations sur le proprietaire du zeybux\n");
					fwrite($fp,"//\n");
					fwrite($fp,"//****************************************************************\n");
					fwrite($fp,"define(\"PROP_NOM\", \"" . $_POST["propNom"] . "\");\n");
					fwrite($fp,"define(\"PROP_ADRESSE\", \"" . $_POST["propAdresse"] . "\");\n");
					fwrite($fp,"define(\"PROP_CODE_POSTAL\", \"" . $_POST["propCP"] . "\");\n");
					fwrite($fp,"define(\"PROP_VILLE\", \"" . $_POST["propVille"] . "\");\n");
					fwrite($fp,"define(\"PROP_TEL\", \"" . $_POST["propTel"] . "\");\n");
					fwrite($fp,"define(\"PROP_MEL\", \"" . $_POST["propMail"] . "\");\n");
					fwrite($fp,"?>\n");
					fclose($fp);
				}
			}				
		} else { // Retour à la Page 1
			header('location:./install.php?page=3');
		}
		echo $lEntete;	
?>	
		<h2>Installation terminée</h2>
		<div id="formulaire" class="ui-widget ui-widget-content ui-corner-all">
			<div class="ui-widget ui-widget-header ui-corner-all">Installation terminée</div>
			<div class="center">
				<a href="<?php echo $_POST["rep"]."/index.php"; ?>">Accéder au zeybux</a>
			</div>
		</div>
<?php 
	}
	echo "</div>";
?>		
	</body>
</html>
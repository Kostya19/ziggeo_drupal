INTRODUCTION
------------

This module provides custom field type for recording and playback video using
Ziggeo service. You can add Ziggeo field to any entity (e.g. node or user).


REQUIREMENTS
------------

 * PHP 5.5 or higher.
 * Libraries module (https://drupal.org/project/libraries)
 * Ziggeo PHP Server SDK (https://github.com/Ziggeo/ZiggeoPhpSdk)


INSTALLATION
------------

1. Place this module "ziggeo" directory in your "modules" folder (this will
   usually be "sites/all/modules/"). Don't install your module in Drupal core's
   "modules" folder, since that will cause problems and is bad practice in
   general. If "sites/all/modules" doesn't exist yet, just create it.

2. Download and unpack the Libraries module directory in your modules folder.

3. Download and unpack Ziggeo PHP Server SDK in "sites/all/libraries" folder
   (https://github.com/Ziggeo/ZiggeoPhpSdk/archive/master.zip).
   Make sure the path to the Ziggeo.php file becomes:
   "sites/all/libraries/ZiggeoPhpSdk/Ziggeo.php".

4. Enable the modules from the Administration area modules page (admin/modules).


USAGE
-----
To use this module you should first sign up in Ziggeo service:
https://ziggeo.com/signup?track=drupal

Create or Edit a content-type (Structure -> Content types) and select
"Manage fields" tab. You can also use Ziggeo field with any entity by opening
"Manage fields" tab in entity settings. To let people comment on it through the
video comments, open the tab "Comment Fields" and use Ziggeo field there.

Type name of new field in "Add new field" textbox, then select "Ziggeo Field"
field type and press "Save" button.

Enter "Application Token", "Private Key" and "Encryption Key". You can see this
settings in your Ziggeo account: choose or create an application, then select
"Overview" item.

Then enter widget settings and other field settings. Widget will use when create
or edit content.

Go to the "Manage Display" tab of your entity type, and select the formatter for
the desired Ziggeo field. Then click the gear icon to configure formatter
settings. Formatter will be used when someone views the content. Formatter will
not be shown unless the video was recorded or uploaded.

Now you can add content with video.

You can see all recorded video in your Ziggeo account.

If you recorded a video and leave the page without save, your video will be
removed next day from your Ziggeo account.

To replace a video, you can press "Re-record" on the recorder or press Remove
(Reset) button under the recorder. In second case new video will be created on
your Ziggeo account and old video will be deleted. If you want re-upload a video
you can use only Remove (Reset) button.

When you create new revision or translation of your page, your video will be
duplicated as well. This way you can edit new revision or translation
independently of the old field. While this has it's advantages it will lead to
multiple videos being stored for the same page in your Ziggeo account. Also be
careful if you are editing a video and at the same time creating a new revision,
use the Remove (Reset) button instead "Re-record" for this, otherwise you will
have two duplicated new videos but old will not be saved.

If you have recorded or uploaded a new video and then have not saved the content
(just left the page), video will saved in your Ziggeo account as temporary (with
expiration_days = 1 parameter) and should be deleted next day. To make sure that
they are removed automatically, you should enable "Automatically delete expired
videos" found in Authorization settings. They can be found by logging into your
Ziggeo account, clicking on the "Manage" menu of the application you are using
and go to "Authorization Settings" tab. This will avoid storage of unused video
in your account.

When you remove video from content or when you delete content, video will be
deleted from your Ziggeo account.


MAINTAINERS
-----------

Konstantin Lesnyak (kostya<at>lesnyak.pro)

If you want express a gratitude to author, just use the link above for sign up
in Ziggeo service.

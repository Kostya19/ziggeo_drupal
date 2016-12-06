INTRODUCTION
------------

This module provides custom field type for recording and playback video using
Ziggeo service. You can add Ziggeo field to any entity (e.g. node or user).


REQUIREMENTS
------------

PHP 5.5 or higher.


INSTALLATION
------------

1. Place this module "ziggeo" directory in your "modules" folder (this will
   usually be "sites/all/modules/"). Don't install your module in Drupal core's
   "modules" folder, since that will cause problems and is bad practice in
   general. If "sites/all/modules" doesn't exist yet, just create it.

2. Enable the module from the Administration area modules page (admin/modules).


USAGE
-----
To use this module you should first sign up in Ziggeo service:
https://ziggeo.com/signup?track=drupal

Create or Edit a content-type (Structure -> Content types) and select
"Manage fields" tab. You can also use Ziggeo field with any entity by opening
"Manage fields" tab in entity settings.

Type name of new field in "Add new field" textbox, then select "Ziggeo Field"
field type and press "Save" button.

Enter "Application Token", "Private Key" and "Encryption Key". You can see this
settings in your Ziggeo account: choose or create an application, then select
"Overview" item.

Then enter widget settings and other field settings. Widget will use when create
or edit content.

Go to the "Manage Display" tab of your entity type, and select the formatter for
the desired Ziggeo field. Then click the gear icon to configure formatter
settings. Formatter will use when view a content.

Now you can add content with video.

You can see all recorded video in your Ziggeo account.

If you recorded a video and leave the page without save, your video will be
removed next day from your Ziggeo account.

To replace a video, you can press "Re-record" on the recorder or press Remove
(Reset) button under the recorder. In second case new video will be created on
your Ziggeo account and old video will be deleted. If you want re-upload a video
you can use only Remove (Reset) button.

When you remove video from content or when you delete content, video will be
deleted from your Ziggeo account.


MAINTAINERS
-----------

Konstantin Lesnyak (kostya<at>lesnyak.pro)

If you want express a gratitude to author, just use the link above for sign up
in Ziggeo service.

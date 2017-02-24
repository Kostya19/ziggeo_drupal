/**
 * @file
 * Provides JavaScript additions to the managed ziggeo field.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.ziggeo = {
    attach: function (context, settings) {
      // Trigger checkbox when click on remove button.
      $('.ziggeo-remove-button').unbind('click');
      $('.ziggeo-remove-button').click(function (e) {
        if (confirm(Drupal.t('Are you sure you want to reset this field item? Video is removed from the material and ziggeo server only after saving the material.'))) {
          $(this).next().find('input').trigger('mousedown');
        }
      });

      //Follow the status of video recording and issue a warning if the video
      //has not been completed when submitting.
      var ziggeo_status = '';
      ZiggeoApi.Events.on('recording', function (data) {
        ziggeo_status = 'recording';
      });
      ZiggeoApi.Events.on('submitted', function (data) {
        ziggeo_status = 'submitted';
      });
      $('#edit-submit').once().click(function () {
        if (ziggeo_status !== '' &&
            ziggeo_status !== 'submitted') {
          if (confirm(Drupal.t('You should complete recording and uploading of video. Otherwise, video data will be lost. Do you want to continue anyway?'))) {
            return true;
          } else {
            return false;
          }
        }
      });
    }
  };

  /**
   * Ajax delivery command to reset ziggeo widget.
   *
   * @param {Drupal.Ajax} ajax
   *   An Ajax object.
   * @param {object} response
   *   The Ajax response.
   * @param {number} status
   *   The HTTP status code.
   */
  Drupal.ajax.prototype.commands.ziggeo_reset_widget = function (ajax, response, status) {
    var input_element = ajax.element.parentNode.previousElementSibling.previousElementSibling;
    if (input_element.value !== '') {
      var $ziggeo_element = $(ajax.element.parentNode.previousElementSibling.parentNode).find('ziggeo');
      var ziggeo_html = response.ziggeo_element_markup;
      $ziggeo_element.replaceWith(ziggeo_html);
      input_element.value = '';
    }
  };
})(jQuery);

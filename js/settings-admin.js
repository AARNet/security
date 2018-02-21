/**
 * @copyright Copyright (c) 2017 Semih Serhat Karakaya <karakayasemi@itu.edu.tr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

$(document).ready(function(){
	$('#security-brute-force-protection').on('click','#save-bfp-settings',
		function() {
			OC.msg.startSaving('#security-save-bfp-settings-message');
			var thresholdTime = $('#security-bfp-threshold-time').val();
			var failTolerance = $('#security-bfp-fail-tolerance').val();
			var banPeriod = $('#security-bfp-ban-period').val();
			if($.isNumeric(thresholdTime) && thresholdTime>0 &&
				$.isNumeric(failTolerance) && failTolerance>0 &&
				$.isNumeric(banPeriod) && banPeriod>0) {
				OC.AppConfig.setValue('security', 'brute_force_protection_time_threshold', thresholdTime);
				OC.AppConfig.setValue('security', 'brute_force_protection_fail_tolerance', failTolerance);
				OC.AppConfig.setValue('security', 'brute_force_protection_ban_period', banPeriod);
				OC.msg.finishedSuccess('#security-save-bfp-settings-message', t('Security', 'Preferences are saved'));
			} else {
				OC.msg.finishedError('#security-save-bfp-settings-message', t('Security', 'Inputs must be positive integers'));
			}
		}
	);
});

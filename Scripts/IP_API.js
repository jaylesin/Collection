if ($response.statusCode != 200) {
  $done(null)
}

var city0 = 'Global'
var isp0 = 'Cross-GFW.org'

function City_ValidCheck (para) {
  if (para) {
    return para
  } else {
    return city0
  }
}

function ISP_ValidCheck (para) {
  if (para) {
    return para
  } else {
    return isp0
  }
}

var flags = new Map([
  ['AC', '🇦🇨'],
  ['AF', '🇦🇫'],
  ['AI', '🇦🇮'],
  ['AL', '🇦🇱'],
  ['AM', '🇦🇲'],
  ['AQ', '🇦🇶'],
  ['AR', '🇦🇷'],
  ['AS', '🇦🇸'],
  ['AT', '🇦🇹'],
  ['AU', '🇦🇺'],
  ['AW', '🇦🇼'],
  ['AX', '🇦🇽'],
  ['AZ', '🇦🇿'],
  ['BB', '🇧🇧'],
  ['BD', '🇧🇩'],
  ['BE', '🇧🇪'],
  ['BF', '🇧🇫'],
  ['BG', '🇧🇬'],
  ['BH', '🇧🇭'],
  ['BI', '🇧🇮'],
  ['BJ', '🇧🇯'],
  ['BM', '🇧🇲'],
  ['BN', '🇧🇳'],
  ['BO', '🇧🇴'],
  ['BR', '🇧🇷'],
  ['BS', '🇧🇸'],
  ['BT', '🇧🇹'],
  ['BV', '🇧🇻'],
  ['BW', '🇧🇼'],
  ['BY', '🇧🇾'],
  ['BZ', '🇧🇿'],
  ['CA', '🇨🇦'],
  ['CF', '🇨🇫'],
  ['CH', '🇨🇭'],
  ['CK', '🇨🇰'],
  ['CL', '🇨🇱'],
  ['CM', '🇨🇲'],
  ['CN', '🇨🇳'],
  ['CO', '🇨🇴'],
  ['CP', '🇨🇵'],
  ['CR', '🇨🇷'],
  ['CU', '🇨🇺'],
  ['CV', '🇨🇻'],
  ['CW', '🇨🇼'],
  ['CX', '🇨🇽'],
  ['CY', '🇨🇾'],
  ['CZ', '🇨🇿'],
  ['DE', '🇩🇪'],
  ['DG', '🇩🇬'],
  ['DJ', '🇩🇯'],
  ['DK', '🇩🇰'],
  ['DM', '🇩🇲'],
  ['DO', '🇩🇴'],
  ['DZ', '🇩🇿'],
  ['EA', '🇪🇦'],
  ['EC', '🇪🇨'],
  ['EE', '🇪🇪'],
  ['EG', '🇪🇬'],
  ['EH', '🇪🇭'],
  ['ER', '🇪🇷'],
  ['ES', '🇪🇸'],
  ['ET', '🇪🇹'],
  ['EU', '🇪🇺'],
  ['FI', '🇫🇮'],
  ['FJ', '🇫🇯'],
  ['FK', '🇫🇰'],
  ['FM', '🇫🇲'],
  ['FO', '🇫🇴'],
  ['FR', '🇫🇷'],
  ['GA', '🇬🇦'],
  ['GB', '🇬🇧'],
  ['HK', '🇭🇰'],
  ['HU', '🇭🇺'],
  ['ID', '🇮🇩'],
  ['IE', '🇮🇪'],
  ['IL', '🇮🇱'],
  ['IM', '🇮🇲'],
  ['IN', '🇮🇳'],
  ['IS', '🇮🇸'],
  ['IT', '🇮🇹'],
  ['JP', '🇯🇵'],
  ['KR', '🇰🇷'],
  ['LU', '🇱🇺'],
  ['MO', '🇲🇴'],
  ['MX', '🇲🇽'],
  ['MY', '🇲🇾'],
  ['NL', '🇳🇱'],
  ['PH', '🇵🇭'],
  ['RO', '🇷🇴'],
  ['RS', '🇷🇸'],
  ['RU', '🇷🇺'],
  ['RW', '🇷🇼'],
  ['SA', '🇸🇦'],
  ['SB', '🇸🇧'],
  ['SC', '🇸🇨'],
  ['SD', '🇸🇩'],
  ['SE', '🇸🇪'],
  ['SG', '🇸🇬'],
  ['TH', '🇹🇭'],
  ['TN', '🇹🇳'],
  ['TO', '🇹🇴'],
  ['TR', '🇹🇷'],
  ['TV', '🇹🇻'],
  ['TW', '🇨🇳'],
  ['UK', '🇬🇧'],
  ['UM', '🇺🇲'],
  ['US', '🇺🇸'],
  ['UY', '🇺🇾'],
  ['UZ', '🇺🇿'],
  ['VA', '🇻🇦'],
  ['VE', '🇻🇪'],
  ['VG', '🇻🇬'],
  ['VI', '🇻🇮'],
  ['VN', '🇻🇳'],
  ['ZA', '🇿🇦']
])

var body = $response.body
var obj = JSON.parse(body)

var title = flags.get(obj['countryCode']) + ' ' + City_ValidCheck(obj['city'])
var subtitle = ISP_ValidCheck(obj['org']) + ' ➠ ' + City_ValidCheck(obj['region'])
var ip = obj['query']
var description =
    'Server: ' + obj['isp'] + '\n' +
    'Region: ' + City_ValidCheck(obj['regionName']) + '\n' +
    'IP: ' + obj['query'] + '\n' +
    'Time Zone: ' + obj['timezone']
$done({ title, subtitle, ip, description })

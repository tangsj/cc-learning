import urllib

import urllib2


def save_file(name, contents):
    fh = open(name, 'w')
    fh.write(contents)
    fh.close()


# req = urllib2.Request('http://www.apesk.com/mensa/common_report_getid/youshi_report_admin.asp?id=480374')
#
# res_data = urllib2.urlopen(req)
#
# res = res_data.read()

for i in range(479700, 479900):
    print i
    req = urllib2.Request('http://www.apesk.com/mensa/common_report_getid/youshi_report_admin.asp?id=' + str(i))

    res_data = urllib2.urlopen(req)

    res = res_data.read()

    # print res
    save_file('tmp/' + str(i) + '.html', res)





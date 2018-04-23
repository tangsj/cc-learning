# coding:utf-8

a = "abc"
b = 456
c = [1, 2, 3, 4]
d = [5, 6]


def cc():
    print a + str(b)
    if 4 < 6 or 4 > 2:
        print a.upper()


cc()


def test():
    print type(c)

    c.append(5)

    c.extend(d)

    print str(c)

    print c[-1]

    print c.count(5)

    if 6 in c:
        print c.index(6)


test()

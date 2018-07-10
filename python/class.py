class Test(object):
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name


instance = Test('code_cook')

print instance.name

ins = Test('tang_js')

print ins.name

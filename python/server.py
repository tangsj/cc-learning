from wsgiref.simple_server import make_server
from test2 import application

httpd = make_server('', 8000, application)
print('Serving HTTP on port 8000...')
print(__name__);
httpd.serve_forever()
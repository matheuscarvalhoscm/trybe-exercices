from socketserver import TCPServer, StreamRequestHandler

class MyTCPHandler(StreamRequestHandler):
  def handle(self):
    self.wfile.write(b"Ola, Client\n")


server = TCPServer(("127.0.0.1", 8085), MyTCPHandler)

server.serve_forever()

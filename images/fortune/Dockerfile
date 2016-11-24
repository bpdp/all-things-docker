FROM alpine:latest

MAINTAINER Bambang Purnomosidi <bdfl@bpdp.xyz>
LABEL version="1.0"
LABEL description="Run fortune - random citation"

RUN ["/bin/rm", "/etc/apk/repositories"]
RUN echo "http://dl-3.alpinelinux.org/alpine/edge/main" > /etc/apk/repositories
RUN echo "http://dl-3.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories

RUN ["/sbin/apk", "update"]
RUN ["/sbin/apk", "add", "fortune"]

CMD ["/usr/bin/fortune"]

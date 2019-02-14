FROM java:8-jdk-alpine
WORKDIR /sandbox
ENV GATLING_VERSION 2.2.2
RUN mkdir -p gatling

RUN apk add --update wget && \
  mkdir -p /tmp/downloads && \
  wget -q -O /tmp/downloads/gatling-$GATLING_VERSION.zip \
  https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/$GATLING_VERSION/gatling-charts-highcharts-bundle-$GATLING_VERSION-bundle.zip && \
  mkdir -p /tmp/archive && cd /tmp/archive && \
  unzip /tmp/downloads/gatling-$GATLING_VERSION.zip && \
  mv /tmp/archive/gatling-charts-highcharts-bundle-$GATLING_VERSION/* /sandbox/gatling/

WORKDIR  /sandbox/gatling
VOLUME ["/sandbox/gatling/results", "/sandbox/gatling/user-files"]
ENV PATH /sandbox/gatling/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENV GATLING_HOME /sandbox/gatling
ENTRYPOINT ["gatling.sh"]

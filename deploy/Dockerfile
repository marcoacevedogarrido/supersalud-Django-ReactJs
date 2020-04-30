FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /config
ADD config/requirements.txt /config/
RUN pip install -r /config/requirements.txt \
    && apt-get update \
    && apt-get install -y  poppler-utils
RUN mkdir /src;
ADD src /src
WORKDIR /src

FROM node
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
COPY page.html /usr/src/app
COPY Initio /usr/src/app
EXPOSE 8080
CMD [ "node", "/usr/src/app/index" ]
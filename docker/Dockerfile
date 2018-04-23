FROM nginx

RUN apt-get update && \
  apt-get install -y vim && \
  echo "dockefile中写入的文字" > /usr/share/nginx/html/index.html

COPY default.conf /etc/nginx/conf.d/default.conf

# 匿名卷
VOLUME [ "/data" ] 

# 声明暴露的端口
EXPOSE 80

# 配置容器启动时的默认命令，默认只能有一个
CMD ["nginx", "-g", "daemon off;"]

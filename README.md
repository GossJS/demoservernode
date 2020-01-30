# demoservernode
пример создания простого веб-сервера с помощью встроенного модуля http

Убедитесь, что у вас установлена версия платформы Node.js не менее 13.5.0, а также программы yarn и curl.

Склонировав проект в папку, установите его зависимости:

```yarn```

Запустите главный файл с помощью 
```node .```

После запуска вы получите номер порта, на котором работает сервер. Предположим, это число 8888.

Проверьте работу веб-сервера с помощью curl. Например:

```curl localhost:8888```

Вы должны будете получить ответ Hello world!

Нажмите Ctrl-C для прекращения работы веб-сервера.

## Упражнение

Добавьте в сценарий index.js строку, которая позволяет по таймеру прекратить работу веб-сервера через 15 секунд после запуска.

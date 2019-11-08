# rn-template-module
Dummy pattern React Native + Redux 
version 0.61.4


1. **Необходимо**  

    JDK 8  
    nodeJS  
    yarn  
    cocoapods  
    react-native cli  
    SDK 28 API  
    и немного храбренья  

2. **Старт**   
    
    yarn app:reboot  
    yarn ios или yarn android  
    

3. **Функционал**  
    
    yarn app:reboot - чистит проект и подтягивает заново зависимости  
    yarn app:doc - генерация документации  
    yarn app:update - повышение версии реакта  
    yarn android - запуск на android  
    yarn ios - запуск на ios  
    yarn ios5 - запуск iphone5  
    yarn iosXs - запуск iphoneXS  
    yarn iosX - запуск iphoneX  
    yarn build:android  - сборка апк  
    yarn build:ios - сборка ipa  
    yarn start - запуск сервера ноды  
    yarn test - запуск тестов  
    yarn lint:update - установка и обвновление eslint + prettier  
     //bash  scripts  
    yarn app:npm <name_module> - создает локальный модуль  
    yarn app:m <name> - создает модуль экрана и подключает его к проекту  
    yarn app:um <name> - отключает модуль от проекта   
    yarn app:dm <name> - удаляет модуль экрана и отключает его от проекта  
    yarn app:sl <name> - создает тип селекторов по имени <name>  
    yarn app:dsl <name> - удаляет тип селекторов по имени <name>    
    yarn app:r <name> - создает редьюсер с заданным именем <name>  
    yarn app:dr <name> - удаляет редьюсер с заданным именем <name>  
    yarn app:rs <name> - создает тип запросов по имени <name>  
    yarn app:drs <name> - удаляет тип запросов по имени <name>   
    

4. **Содержимое**  

    Обработка запросов оффлайн  
    Нативная навигация с обработкой свайпов и механического бэка(андройд)  
    Js навигация (TabNavigation - 3 типов)
    Клиент запросов  
    Redux хранилище (thunk, persist,logger) 
    Reselect - преобразование данных редакса к нужному виду(снижение рендера)
    Локализация  
    Темы стилей (поддержка хот релоад) 
    'Модульная струткура'  
    Логирование  
    Автодок  
    UniversalLink (android) для ios надо больше прописать индивидуально
    Библиотека примитивов   
        - Текcт  
        - Вьюха  
        - Тоаст/Алерт  
        - Иконка  
        - Кнопка  
        - Списки  
        - Градиенты  
        - Пикер  
        - Слайдер  
        - Каунтер  
        - Текст инпут  
        - Текст маска  
        - Вебвьюха  
        - Отступ  
        - Сплэшскрин  
        - Индикаторы активности  

5. **Добавлено в деве**

    
6. **Необходимо добавить**   
    умный экспорт  
    расширить toast (тестирование)  
    расширить Links (deep link and universal link, работа с обработчиками)  
    баш скрипт CI  

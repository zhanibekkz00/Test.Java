(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant6"] = [
        {
            text: "Как переключиться на ветку?",
            options: ["git switch", "git move", "git checkout-only", "git change", "git select"],
            correctAnswer: "git switch",
        },
        {
            text: "Что делает git merge?",
            options: ["Копирует файлы", "Создаёт коммит", "Удаляет ветку", "Откатывает изменения", "Объединяет ветки"],
            correctAnswer: "Объединяет ветки",
        },
        {
            text: "Что делает git revert?",
            options: ["Перемещает ветку", "Удаляет историю", "Удаляет репозиторий", "Создаёт новый коммит, отменяющий изменения", "Удаляет файлы"],
            correctAnswer: "Создаёт новый коммит, отменяющий изменения",
        },
        {
            text: "Какой аннотацией помечают Spring-контроллер?",
            options: ["@Bean", "@Entity", "@Service", "@Component", "@Controller"],
            correctAnswer: "@Controller",
        },
        {
            text: "Какая аннотация создаёт REST-контроллер?",
            options: ["@RequestMapping", "@RestController", "@Component", "@Service", "@Bean"],
            correctAnswer: "@RestController",
        },
        {
            text: "Какой аннотацией внедряют зависимость?",
            options: ["@Service", "@Link", "@Connect", "@InjectNow", "@Autowired"],
            correctAnswer: "@Autowired",
        },
        {
            text: "Что делает @Service?",
            options: ["Управляет памятью", "Создаёт БД", "Обрабатывает запросы", "Помечает бизнес-логику", "Запускает сервер"],
            correctAnswer: "Помечает бизнес-логику",
        },
        {
            text: "Какой сервер по умолчанию в Spring Boot?",
            options: ["Nginx", "Jetty", "Tomcat", "Apache", "Docker"],
            correctAnswer: "Tomcat",
        },
        {
            text: "Какой файл конфигурации Spring Boot?",
            options: ["app.yml", "boot.json", "application.properties", "config.xml", "settings.cfg"],
            correctAnswer: "application.properties",
        },
        {
            text: "Какой аннотацией задают маршрут?",
            options: ["@RequestMapping", "@Path", "@Get", "@Route", "@Mapping"],
            correctAnswer: "@RequestMapping",
        },
        {
            text: "Какой метод HTTP получает данные?",
            options: ["DELETE", "PUT", "GET", "POST", "PATCH"],
            correctAnswer: "GET",
        },
        {
            text: "Какой метод HTTP отправляет данные?",
            options: ["TRACE", "HEAD", "DELETE", "POST", "GET"],
            correctAnswer: "POST",
        },
        {
            text: "Что делает @Entity?",
            options: ["Создаёт репозиторий", "Создаёт контроллер", "Создаёт сервис", "Создаёт таблицу в БД", "Создаёт поток"],
            correctAnswer: "Создаёт таблицу в БД",
        },
        {
            text: "Какой стандарт логирования чаще всего используется в Spring?",
            options: ["Log4j", "System.out", "Console.log", "Println", "LoggerX"],
            correctAnswer: "Log4j",
        },
        {
            text: "Как создать логгер в Java?",
            options: ["Log.create()", "new Logger()", "LoggerFactory.getLogger", "System.out", "log.start()"],
            correctAnswer: "LoggerFactory.getLogger",
        },
        {
            text: "Какой уровень логирования самый важный?",
            options: ["WARN", "TRACE", "INFO", "ERROR", "DEBUG"],
            correctAnswer: "ERROR",
        },
        {
            text: "Какой уровень используется для отладки?",
            options: ["DEBUG", "ERROR", "FATAL", "WARN", "INFO"],
            correctAnswer: "DEBUG",
        },
        {
            text: "Где обычно хранятся логи?",
            options: ["В памяти", "В БД", "В файлах", "В браузере", "В Git"],
            correctAnswer: "В файлах",
        },
        {
            text: "Какой фреймворк тестирования популярен в Java?",
            options: ["JUnit", "Maven", "Git", "Docker", "Spring"],
            correctAnswer: "JUnit",
        },
        {
            text: "Какая аннотация помечает тест?",
            options: ["@Run", "@Check", "@Main", "@Verify", "@Test"],
            correctAnswer: "@Test",
        },
        {
            text: "Что проверяет assertEquals?",
            options: ["Тип", "Скорость", "Память", "Время", "Равенство"],
            correctAnswer: "Равенство",
        },
        {
            text: "Что такое мок?",
            options: ["Реальный объект", "Поток", "Контейнер", "Заглушка объекта", "Сервер"],
            correctAnswer: "Заглушка объекта",
        },
        {
            text: "Какой инструмент для моков популярен?",
            options: ["Git", "Mockito", "JPA", "Spring", "Docker"],
            correctAnswer: "Mockito",
        },
        {
            text: "Какая команда используется для создания новой записи в таблице?",
            options: ["SELECT", "CREATE", "UPDATE", "DELETE", "INSERT"],
            correctAnswer: "INSERT",
        },
        {
            text: "Какой инструмент используется для мониторинга SQL-запросов?",
            options: ["DataGrip", "Spring Boot", "JUnit", "Hibernate SQL Logging", "IntelliJ IDEA"],
            correctAnswer: "Hibernate SQL Logging",
        },
        {
            text: "Для чего используется аннотация @Id?",
            options: ["Для маппинга данных", "Для настройки контроллера", "Для указания первичного ключа сущности", "Для создания таблицы", "Для указания внешнего ключа"],
            correctAnswer: "Для указания первичного ключа сущности",
        },
        {
            text: "Какая аннотация используется для маппинга таблицы в классе?",
            options: ["@Data", "@Entity", "@Column", "@Table", "@Id"],
            correctAnswer: "@Table",
        },
        {
            text: "Для чего используется аннотация @PathVariable в Spring MVC?",
            options: ["Для указания на обработку ошибок", "Для настройки конфигурации приложения", "Для связи с базой данных", "Для передачи данных в модель", "Для получения данных из URL"],
            correctAnswer: "Для получения данных из URL",
        },
        {
            text: "Какой фреймворк тестирования популярен в Java?",
            options: ["Maven", "Git", "Docker", "JUnit", "Spring"],
            correctAnswer: "JUnit",
        },
        {
            text: "Какая аннотация помечает тест?",
            options: ["@Main", "@Run", "@Check", "@Verify", "@Test"],
            correctAnswer: "@Test",
        },
        {
            text: "Что проверяет assertEquals?",
            options: ["Время", "Тип", "Равенство", "Скорость", "Память"],
            correctAnswer: "Равенство",
        },
        {
            text: "Что такое мок?",
            options: ["Заглушка объекта", "Контейнер", "Сервер", "Реальный объект", "Поток"],
            correctAnswer: "Заглушка объекта",
        },
        {
            text: "Какой инструмент для моков популярен?",
            options: ["JPA", "Git", "Spring", "Mockito", "Docker"],
            correctAnswer: "Mockito",
        },
        {
            text: "Что такое Docker?",
            options: ["IDE", "Язык", "Сервер", "Контейнеризация", "БД"],
            correctAnswer: "Контейнеризация",
        },
        {
            text: "Как создать образ?",
            options: ["docker run", "docker pull", "docker commit", "docker start", "docker build"],
            correctAnswer: "docker build",
        },
        {
            text: "Как запустить контейнер?",
            options: ["docker push", "docker build", "docker create", "docker exec", "docker run"],
            correctAnswer: "docker run",
        },
        {
            text: "Как посмотреть запущенные контейнеры?",
            options: ["docker view", "docker list", "docker show", "docker status", "docker ps"],
            correctAnswer: "docker ps",
        },
        {
            text: "Как скачать образ?",
            options: ["docker fetch", "docker pull", "docker download", "docker get", "docker push"],
            correctAnswer: "docker pull",
        },
        {
            text: "Какой уровень логирования следует использовать для записи информации об ошибках?",
            options: ["INFO", "ERROR", "DEBUG", "WARN", "TRACE"],
            correctAnswer: "ERROR",
        },
        {
            text: "Какой Appender записывает логи в файл?",
            options: ["ConsoleAppender", "MemoryAppender", "RollingFileAppender", "FileAppender", "DatabaseAppender"],
            correctAnswer: "FileAppender",
        },
    ];
})();

(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant6"] = [
        {
            text: "Бұтаққа (ветка) қалай ауысуға болады?",
            options: ["git switch", "git move", "git checkout-only", "git change", "git select"],
            correctAnswer: "git switch",
        },
        {
            text: "git merge не істейді?",
            options: ["Файлдарды көшіреді", "Коммит жасайды", "Бұтақты жояды", "Өзгерістерді кері қайтарады", "Бұтақтарды біріктіреді"],
            correctAnswer: "Бұтақтарды біріктіреді",
        },
        {
            text: "git revert ne істейді?",
            options: ["Бұтақты жылжытады", "Тарихты жояды", "Репозиторийді жояды", "Өзгерістерді болдырмайтын жаңа коммит жасайды", "Файлдарды жояды"],
            correctAnswer: "Өзгерістерді болдырмайтын жаңа коммит жасайды",
        },
        {
            text: "Spring-контроллер қандай аннотациямен белгіленеді?",
            options: ["@Bean", "@Entity", "@Service", "@Component", "@Controller"],
            correctAnswer: "@Controller",
        },
        {
            text: "REST-контроллерді қандай аннотация құрады?",
            options: ["@RequestMapping", "@RestController", "@Component", "@Service", "@Bean"],
            correctAnswer: "@RestController",
        },
        {
            text: "Тәуелділік (зависимость) қандай аннотациямен енгізіледі?",
            options: ["@Service", "@Link", "@Connect", "@InjectNow", "@Autowired"],
            correctAnswer: "@Autowired",
        },
        {
            text: "@Service не істейді?",
            options: ["Жадыны басқарады", "Дерекқор құрады", "Сұраныстарды өңдейді", "Бизнес-логиканы белгілейді", "Серверді іске қосады"],
            correctAnswer: "Бизнес-логиканы белгілейді",
        },
        {
            text: "Spring Boot-та әдепкі бойынша қандай сервер қолданылады?",
            options: ["Nginx", "Jetty", "Tomcat", "Apache", "Docker"],
            correctAnswer: "Tomcat",
        },
        {
            text: "Spring Boot конфигурация файлы қандай?",
            options: ["app.yml", "boot.json", "application.properties", "config.xml", "settings.cfg"],
            correctAnswer: "application.properties",
        },
        {
            text: "Маршрут қандай аннотациямен белгіленеді?",
            options: ["@RequestMapping", "@Path", "@Get", "@Route", "@Mapping"],
            correctAnswer: "@RequestMapping",
        },
        {
            text: "Деректерді алатын HTTP әдісі қандай?",
            options: ["DELETE", "PUT", "GET", "POST", "PATCH"],
            correctAnswer: "GET",
        },
        {
            text: "Деректерді жіберетін HTTP әдісі қандай?",
            options: ["TRACE", "HEAD", "DELETE", "POST", "GET"],
            correctAnswer: "POST",
        },
        {
            text: "@Entity не істейді?",
            options: ["Репозиторий құрады", "Контроллер құрады", "Сервис құрады", "Дерекқорда кесте құрады (мәнді анықтайды)", "Ағын (поток) құрады"],
            correctAnswer: "Дерекқорда кесте құрады (мәнді анықтайды)",
        },
        {
            text: "Spring-те көбінесе қандай логтау стандарты қолданылады?",
            options: ["Log4j", "System.out", "Console.log", "Println", "LoggerX"],
            correctAnswer: "Log4j",
        },
        {
            text: "Java-да логгерді қалай құрады?",
            options: ["Log.create()", "new Logger()", "LoggerFactory.getLogger", "System.out", "log.start()"],
            correctAnswer: "LoggerFactory.getLogger",
        },
        {
            text: "Ең маңызды логтау деңгейі қандай?",
            options: ["WARN", "TRACE", "INFO", "ERROR", "DEBUG"],
            correctAnswer: "ERROR",
        },
        {
            text: "Жөндеу (отладка) үшін қандай деңгей қолданылады?",
            options: ["DEBUG", "ERROR", "FATAL", "WARN", "INFO"],
            correctAnswer: "DEBUG",
        },
        {
            text: "Логтар әдетте қайда сақталады?",
            options: ["Жадыда", "Дерекқорда", "Файлдарда", "Браузерде", "Git-те"],
            correctAnswer: "Файлдарда",
        },
        {
            text: "Java-да қандай тестілеу фреймворкы танымал?",
            options: ["JUnit", "Maven", "Git", "Docker", "Spring"],
            correctAnswer: "JUnit",
        },
        {
            text: "Тестті қандай аннотация белгілейді?",
            options: ["@Run", "@Check", "@Main", "@Verify", "@Test"],
            correctAnswer: "@Test",
        },
        {
            text: "assertEquals нені тексереді?",
            options: ["Типті", "Жылдамдықты", "Жадыны", "Уақытты", "Теңдікті"],
            correctAnswer: "Теңдікті",
        },
        {
            text: "Мок деген не?",
            options: ["Нақты объект", "Ағын (поток)", "Контейнер", "Объектінің бітеуіші (заглушка)", "Сервер"],
            correctAnswer: "Объектінің бітеуіші (заглушка)",
        },
        {
            text: "Моктарға арналған қандай құрал танымал?",
            options: ["Git", "Mockito", "JPA", "Spring", "Docker"],
            correctAnswer: "Mockito",
        },
        {
            text: "Кестеде жаңа жазба құру үшін қандай пәрмен қолданылады?",
            options: ["SELECT", "CREATE", "UPDATE", "DELETE", "INSERT"],
            correctAnswer: "INSERT",
        },
        {
            text: "SQL-сұраныстарды мониторингтеу үшін қандай құрал қолданылады?",
            options: ["DataGrip", "Spring Boot", "JUnit", "Hibernate SQL Logging", "IntelliJ IDEA"],
            correctAnswer: "Hibernate SQL Logging",
        },
        {
            text: "@Id аннотациясы не үшін қолданылады?",
            options: ["Деректерді маппинг жасау үшін", "Контроллерді баптау үшін", "Мәннің (сущность) бастапқы кілтін көрсету үшін", "Кесте құру үшін", "Сыртқы кілтті көрсету үшін"],
            correctAnswer: "Мәннің (сущность) бастапқы кілтін көрсету үшін",
        },
        {
            text: "Кластағы кестені маппинг жасау үшін қандай аннотация қолданылады?",
            options: ["@Data", "@Entity", "@Column", "@Table", "@Id"],
            correctAnswer: "@Table",
        },
        {
            text: "Spring MVC-де @PathVariable аннотациясы не үшін қолданылады?",
            options: ["Қателерді өңдеуді көрсету үшін", "Қолданба конфигурациясын баптау үшін", "Дерекқормен байланысу үшін", "Модельге деректерді жіберу үшін", "URL-ден деректерді алу үшін"],
            correctAnswer: "URL-ден деректерді алу үшін",
        },
        {
            text: "Java-да қандай тестілеу фреймворкы танымал?",
            options: ["Maven", "Git", "Docker", "JUnit", "Spring"],
            correctAnswer: "JUnit",
        },
        {
            text: "Тестті қандай аннотация белгілейді?",
            options: ["@Main", "@Run", "@Check", "@Verify", "@Test"],
            correctAnswer: "@Test",
        },
        {
            text: "assertEquals нені тексереді?",
            options: ["Уақытты", "Типті", "Теңдікті", "Жылдамдықты", "Жадыны"],
            correctAnswer: "Теңдікті",
        },
        {
            text: "Мок деген не?",
            options: ["Объектінің бітеуіші (заглушка)", "Контейнер", "Сервер", "Нақты объект", "Ағын (поток)"],
            correctAnswer: "Объектінің бітеуіші (заглушка)",
        },
        {
            text: "Моктарға арналған қандай құрал танымал?",
            options: ["JPA", "Git", "Spring", "Mockito", "Docker"],
            correctAnswer: "Mockito",
        },
        {
            text: "Docker деген не?",
            options: ["IDE", "Тіл", "Сервер", "Контейнерлеу (Контейнеризация)", "ДБ"],
            correctAnswer: "Контейнерлеу (Контейнеризация)",
        },
        {
            text: "Бейнені (образ) қалай құрады?",
            options: ["docker run", "docker pull", "docker commit", "docker start", "docker build"],
            correctAnswer: "docker build",
        },
        {
            text: "Контейнерді қалай іске қосады?",
            options: ["docker push", "docker build", "docker create", "docker exec", "docker run"],
            correctAnswer: "docker run",
        },
        {
            text: "Іске қосылған контейнерлерді қалай көруге болады?",
            options: ["docker view", "docker list", "docker show", "docker status", "docker ps"],
            correctAnswer: "docker ps",
        },
        {
            text: "Бейнені (образ) қалай жүктейді (скачать)?",
            options: ["docker fetch", "docker pull", "docker download", "docker get", "docker push"],
            correctAnswer: "docker pull",
        },
        {
            text: "Қателер туралы ақпаратты жазу үшін қандай логтау деңгейін қолданған жөн?",
            options: ["INFO", "ERROR", "DEBUG", "WARN", "TRACE"],
            correctAnswer: "ERROR",
        },
        {
            text: "Логтарды файлға жазатын Appender қандай?",
            options: ["ConsoleAppender", "MemoryAppender", "RollingFileAppender", "FileAppender", "DatabaseAppender"],
            correctAnswer: "FileAppender",
        },
    ];
})();

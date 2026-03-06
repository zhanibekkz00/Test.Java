(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant3"] = [
        {
            text: "Spring-те @Service аннотациясы не істейді?",
            options: ["Дерекқор репозиторийін анықтайды", "Дерекқормен байланысты баптайды", "Бизнес-логиканы қамтитын компонентті анықтайды", "Контроллерді анықтайды", "Сериализацияны баптайды"],
            correctAnswer: "Бизнес-логиканы қамтитын компонентті анықтайды",
        },
        {
            text: "@RequestParam аннотациясындағы 'name' параметрі қандай мәнге ие?",
            options: ["URL немесе сұраныс денесінен параметр атын анықтайды", "Параметрді сұраныс денесімен байланыстырады", "HTML қайтаратынын көрсетеді", "Параметрдің міндетті екенін көрсетеді", "Параметр түрін белгілейді"],
            correctAnswer: "URL немесе сұраныс денесінен параметр атын анықтайды",
        },
        {
            text: "Егер міндетті @RequestParam параметрі жоқ болса, Spring қандай қате лақтырады?",
            options: ["MissingEntityException", "MissingServletRequestParameterException", "NullPointerException", "SQLException", "IllegalArgumentException"],
            correctAnswer: "MissingServletRequestParameterException",
        },
        {
            text: "Spring контекстінде DataSource деген не?",
            options: ["Бұл сұраныстарды өңдеуге арналған контроллер", "Бұл дерекқормен қосылымды білдіретін объект", "Бұл SQL-сұраныстарды орындауға арналған класс", "Бұл фронтендке арналған деректер моделі", "Бұл сұраныстар фабрикасы"],
            correctAnswer: "Бұл дерекқормен қосылымды білдіретін объект",
        },
        {
            text: "Spring Data JPA-да мәнді (сущность) ID бойынша жою үшін қандай әдіс қолданылады?",
            options: ["deleteAll()", "findAndRemove()", "removeEntity()", "deleteById()", "removeById()"],
            correctAnswer: "deleteById()",
        },
        {
            text: "Кесте бағандарын класс өрістеріне маппинг жасау үшін қандай аннотация қолданылады?",
            options: ["@Table", "@Entity", "@PrimaryKey", "@Column", "@JoinColumn"],
            correctAnswer: "@Column",
        },
        {
            text: "Spring-те мәндердің (сущности) нұсқалылығын (версионность) басқару үшін қандай аннотацияны қолдануға болады?",
            options: ["@GeneratedValue", "@Version", "@Id", "@Table", "@Column"],
            correctAnswer: "@Version",
        },
        {
            text: "Логтау (логирование) деген не?",
            options: ["Кодты тестілеу құралы", "Талдау үшін қолданбада болып жатқан оқиғаларды жазу", "Код өнімділігін оңтайландыру әдісі", "Драйверлерді орнату процесі", "Деректерді шифрлау тәсілі"],
            correctAnswer: "Талдау үшін қолданбада болып жатқан оқиғаларды жазу",
        },
        {
            text: "Логтаудың негізгі мақсаты қандай?",
            options: ["Қолданбаның жұмыс жылдамдығын арттыру", "Сервердің қуат тұтынуын азайту", "Деректердің резервтік көшірмесін жасау", "Қолданбаларды мониторингтеу және диагностикалауды қамтамасыз ету", "Пайдаланушы интерфейсін жақсарту"],
            correctAnswer: "Қолданбаларды мониторингтеу және диагностикалауды қамтамасыз ету",
        },
        {
            text: "Java-да кірістірілген логтау үшін қандай пакет қолданылады?",
            options: ["java.logging.framework", "java.sql", "java.util.logging", "java.log", "java.io.logging"],
            correctAnswer: "java.util.logging",
        },
        {
            text: "Ақпараттық хабарламаны жазу үшін Logger-дің қай әдісі қолданылады?",
            options: ["writeLog()", "info()", "logMessage()", "log(Level.INFO, message)", "logInfo()"],
            correctAnswer: "info()",
        },
        {
            text: "SLF4J туралы тұжырымдардың қайсысы дұрыс?",
            options: ["Бұл дерекқорлармен жұмыс істеуге арналған кітапхана", "Бұл тәуелділіктерді басқару құралы", "Бұл Java-дағы кірістірілген кітапхана", "Бұл әртүрлі логтау фреймворктарына арналған интерфейс (фасад)", "Бұл көп ағындылыққа арналған log4j кеңейтімі"],
            correctAnswer: "Бұл әртүрлі логтау фреймворктарына арналған интерфейс (фасад)",
        },
        {
            text: "SLF4J-ді log4j-мен интеграциялау үшін қандай кітапхананы қосу керек?",
            options: ["slf4j-logger", "log4j-slf4j-connector", "slf4j-core", "slf4j-log4j12", "log4j2-slf4j-bridge"],
            correctAnswer: "slf4j-log4j12",
        },
        {
            text: "Spring әдепкі (по умолчанию) бойынша қандай логтау кітапханасын қолданады?",
            options: ["Spring Logging", "java.util.logging", "SLF4J", "log4j", "Logback"],
            correctAnswer: "Logback",
        },
        {
            text: "Spring Boot-та логтау деңгейін қалай баптауға болады?",
            options: ["application.properties немесе application.yml файлында", "pom.xml конфигурациясы арқылы", "logback-default.xml файлы арқылы", "@LogConfig аннотациялары арқылы", "Тек бағдарламалық түрде Java-код арқылы"],
            correctAnswer: "application.properties немесе application.yml файлында",
        },
        {
            text: "Spring Boot-та Logback қандай конфигурация файлын қолданады?",
            options: ["logback.xml", "logback-config.xml", "spring-log.xml", "application-logback.yml", "logback-spring.xml"],
            correctAnswer: "logback-spring.xml",
        },
        {
            text: "Spring класында логгерді қандай аннотациямен автоматты түрде қосуға болады?",
            options: ["@EnableLogging", "@Log", "@Log4j", "@Slf4j", "@Logger"],
            correctAnswer: "@Slf4j",
        },
        {
            text: "Spring Boot-та асинхронды логтауды қалай қосуға болады?",
            options: ["logback-spring.xml файлында AsyncAppender баптау", "Логтау деңгейін DEBUG-қа орнату", "application.properties файлында асинхронды режимді қосу", "Стандартты Spring Boot баптауларын қолдану", "@AsyncLogging аннотациясын қосу"],
            correctAnswer: "logback-spring.xml файлында AsyncAppender баптау",
        },
        {
            text: "Логтау деңгейі деген не?",
            options: ["Логтарды жазу жиілігін баптау", "Логтарды пішімдеу тәсілі", "Ағындармен жұмыс істеу құралы", "Логтарды дерекқорға жазу әдісі", "Логтарға жазылатын ақпараттың егжей-тегжейлілік деңгейі"],
            correctAnswer: "Логтарға жазылатын ақпараттың егжей-тегжейлілік деңгейі",
        },
        {
            text: "Қолданбаны жөндеу (отладка) үшін қандай логтау деңгейі қолданылады?",
            options: ["WARN", "INFO", "DEBUG", "FATAL", "ERROR"],
            correctAnswer: "DEBUG",
        },
        {
            text: "Қателер туралы ақпаратты жазу үшін қандай логтау деңгейін қолданған жөн?",
            options: ["DEBUG", "TRACE", "WARN", "INFO", "ERROR"],
            correctAnswer: "ERROR",
        },
        {
            text: "Логтарды файлға жазатын Appender қандай?",
            options: ["RollingFileAppender", "MemoryAppender", "DatabaseAppender", "FileAppender", "ConsoleAppender"],
            correctAnswer: "FileAppender",
        },
        {
            text: "RollingFileAppender не істейді?",
            options: ["Белгіленген өлшемге жеткенде жаңа лог файлдарын жасайды", "Тек соңғы оқиғаларды логтайды", "Логтарды автоматты түрде мұрағаттайды", "Жазылғаннан кейін ескі логтарды жояды", "Логтарды кілтсөздер бойынша сүзгілейді"],
            correctAnswer: "Белгіленген өлшемге жеткенде жаңа лог файлдарын жасайды",
        },
        {
            text: "Log4j-де логтарды консольге шығаруды қалай баптауға болады?",
            options: ["TRACE деңгейін баптау", "ConsoleAppender пайдалану", "PatternLayout пайдалану", "SLF4J қосу", "FileAppender пайдалану"],
            correctAnswer: "ConsoleAppender пайдалану",
        },
        {
            text: "Log4j-де логтарды пішімдеуге (форматирование) қай параметр жауап береді?",
            options: ["Layout", "Filter", "Appender", "Logger", "Formatter"],
            correctAnswer: "Layout",
        },
        {
            text: "Log4j-дегі қай Layout логтардың қарапайым пішімін баптауға мүмкіндік береді?",
            options: ["HTMLLayout", "PatternLayout", "SimpleLayout", "XMLLayout", "JsonLayout"],
            correctAnswer: "SimpleLayout",
        },
        {
            text: "Логтауда MDC деген не?",
            options: ["Логтарды пішімдеу функциясы", "Логтарды жадыда сақтау компоненті", "Мәтінмәндік (контекстік) ақпаратты логтарға беру механизмі", "Логтарды талдау құралы", "Көп ағынды қолданбаларға арналған логтау деңгейі"],
            correctAnswer: "Мәтінмәндік (контекстік) ақпаратты логтарға беру механизмі",
        },
        {
            text: "Егер Appender реализациясы көрсетілмесе не болады?",
            options: ["Логтау өшіріледі", "Логтау жадыда жүзеге асады", "Логтар автоматты түрде файлға жіберіледі", "Логтар әдепкі бойынша консольге жазылады", "Логтар жазылмайды"],
            correctAnswer: "Логтар жазылмайды",
        },
        {
            text: "Асинхронды логтау үшін қандай кітапхананы қолданған дұрыс?",
            options: ["log4j2", "SLF4J", "java.util.logging", "Logback", "AsyncLogger"],
            correctAnswer: "log4j2",
        },
        {
            text: "Logback-те логтардың ротациясын қалай баптауға болады?",
            options: ["AsyncAppender қосу", "RollingFileAppender пайдалану", "FileAppender пайдалану", "ConsoleAppender баптау", "TRACE логтау деңгейін орнату"],
            correctAnswer: "RollingFileAppender пайдалану",
        },
        {
            text: "SLF4J-дің логтармен жұмыс істеу үшін қолданылатын интерфейсі қандай?",
            options: ["org.slf4j.Log", "org.slf4j.Appender", "org.slf4j.Logger", "org.slf4j.PatternLayout", "org.slf4j.LoggingManager"],
            correctAnswer: "org.slf4j.Logger",
        },
        {
            text: "SLF4J-де логгер данасын (экземплярын) қалай құруға болады?",
            options: ["Logger logger = SLF4J.getLogger();", "Logger logger = Logger.create();", "Logger logger = new LoggerFactory();", "Logger logger = LoggerFactory.getLogger(MyClass.class);", "Logger logger = new Logger();"],
            correctAnswer: "LoggerFactory.getLogger(MyClass.class)",
        },
        {
            text: "SLF4J-де логтау деңгейін көрсетуге қай параметр жауап береді?",
            options: ["log.level", "Appender.level", "logging.level", "slf4j.level", "Logger.level"],
            correctAnswer: "logging.level",
        },
        {
            text: "Log4j2-де асинхронды режимде логтауды қалай баптауға болады?",
            options: ["Конфигурацияда асинхронды режимді қосу", "TRACE деңгейін қосу", "FileAppender баптау", "PatternLayout пайдалану", "AsyncAppender пайдалану"],
            correctAnswer: "Конфигурацияда асинхронды режимді қосу",
        },
        {
            text: "Log4j2 конфигурациясына қай файл жауап береді?",
            options: ["log4j2-config.xml", "log4j2.xml", "application.properties", "logback.xml", "log4j.xml"],
            correctAnswer: "log4j2.xml",
        },
        {
            text: "JUnit-те @Test аннотациясы не үшін қолданылады?",
            options: ["Тестілеу туралы есепті генерациялау үшін", "Әдісті тестілік әдіс ретінде анықтау үшін", "Статикалық әдісті көрсету үшін", "Негізгі әдісті құру үшін", "Тестілік дерекқорды қосу үшін"],
            correctAnswer: "Әдісті тестілік әдіс ретінде анықтау үшін",
        },
        {
            text: "Әрбір тест алдында кодты орындау үшін қандай аннотация қолданылады?",
            options: ["@Setup", "@BeforeEach", "@After", "@Initialize", "@PreRun"],
            correctAnswer: "@BeforeEach",
        },
        {
            text: "JUnit-те екі мәннің теңдігін тексеру үшін қандай әдісті қолданған жөн?",
            options: ["assertEquals()", "assertTrue()", "assertFalse()", "assertNotNull()", "assertSame()"],
            correctAnswer: "assertEquals()",
        },
        {
            text: "Егер JUnit-тегі тест ерекше жағдаймен (исключение) аяқталса не болады?",
            options: ["Тест сәтті өтті деп есептеледі", "Ерекше жағдай еленбейді", "Тест сәтсіз (провал) деп есептеледі", "Тест өткізіп жіберіледі", "@After әдісі орындалады"],
            correctAnswer: "Тест сәтсіз (провал) деп есептеледі",
        },
        {
            text: "Тізімделген әдістердің қайсысы JUnit-тің стандартты функцияларына кірмейді?",
            options: ["assertThrows()", "validateInput()", "assertArrayEquals()", "assertNotNull()", "assertSame()"],
            correctAnswer: "validateInput()",
        },
    ];
})();

(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant3"] = [
        {
            text: "Что делает аннотация @Service в Spring?",
            options: ["Определяет репозиторий базы данных", "Настраивает связь с базой данных", "Определяет компонент, содержащий бизнес-логику", "Определяет контроллер", "Настраивает сериализацию"],
            correctAnswer: "Определяет компонент, содержащий бизнес-логику",
        },
        {
            text: "Какое значение имеет параметр \"name\" в аннотации @RequestParam?",
            options: ["Определяет имя параметра из URL или тела запроса", "Связывает параметр с телом запроса", "Указывает на возврат HTML", "Указывает, что параметр является обязательным", "Задает тип параметра"],
            correctAnswer: "Определяет имя параметра из URL или тела запроса",
        },
        {
            text: "Какую ошибку выбросит Spring, если отсутствует обязательный параметр @RequestParam?",
            options: ["MissingEntityException", "MissingServletRequestParameterException", "NullPointerException", "SQLException", "IllegalArgumentException"],
            correctAnswer: "MissingServletRequestParameterException",
        },
        {
            text: "Что такое DataSource в контексте Spring?",
            options: ["Это контроллер для обработки запросов", "Это объект, представляющий соединение с базой данных", "Это класс для выполнения SQL-запросов", "Это модель данных для фронтенда", "Это фабрика запросов"],
            correctAnswer: "Это объект, представляющий соединение с базой данных",
        },
        {
            text: "Какой метод используется для удаления сущности по ID в Spring Data JPA?",
            options: ["deleteAll()", "findAndRemove()", "removeEntity()", "deleteById()", "removeById()"],
            correctAnswer: "deleteById()",
        },
        {
            text: "Какая аннотация используется для маппинга столбцов таблицы на поля класса?",
            options: ["@Table", "@Entity", "@PrimaryKey", "@Column", "@JoinColumn"],
            correctAnswer: "@Column",
        },
        {
            text: "Какую аннотацию можно использовать для управления версионностью сущностей в Spring?",
            options: ["@GeneratedValue", "@Version", "@Id", "@Table", "@Column"],
            correctAnswer: "@Version",
        },
        {
            text: "Что такое логирование?",
            options: ["Инструмент для тестирования кода", "Запись событий, происходящих в приложении, для их анализа", "Метод для оптимизации производительности кода", "Процесс установки драйверов", "Способ шифрования данных"],
            correctAnswer: "Запись событий, происходящих в приложении, для их анализа",
        },
        {
            text: "Какая основная цель логирования?",
            options: ["Увеличение скорости работы приложения", "Снижение энергопотребления сервера", "Создание резервных копий данных", "Обеспечение мониторинга и диагностики приложений", "Улучшение пользовательского интерфейса"],
            correctAnswer: "Обеспечение мониторинга и диагностики приложений",
        },
        {
            text: "Какой пакет используется для встроенного логирования в Java?",
            options: ["java.logging.framework", "java.sql", "java.util.logging", "java.log", "java.io.logging"],
            correctAnswer: "java.util.logging",
        },
        {
            text: "Какой метод из Logger используется для записи информационного сообщения?",
            options: ["writeLog()", "info()", "logMessage()", "log(Level.INFO, message)", "logInfo()"],
            correctAnswer: "info()",
        },
        {
            text: "Какое из утверждений о SLF4J является правильным?",
            options: ["Это библиотека для работы с базами данных", "Это инструмент для управления зависимостями", "Это встроенная библиотека в Java", "Это интерфейс для различных фреймворков логирования", "Это расширение log4j для многопоточности"],
            correctAnswer: "Это интерфейс для различных фреймворков логирования",
        },
        {
            text: "Какую библиотеку нужно подключить для интеграции SLF4J с log4j?",
            options: ["slf4j-logger", "log4j-slf4j-connector", "slf4j-core", "slf4j-log4j12", "log4j2-slf4j-bridge"],
            correctAnswer: "slf4j-log4j12",
        },
        {
            text: "Какой библиотекой логирования Spring пользуется по умолчанию?",
            options: ["Spring Logging", "java.util.logging", "SLF4J", "log4j", "Logback"],
            correctAnswer: "Logback",
        },
        {
            text: "Как настроить уровень логирования в Spring Boot?",
            options: ["В файле application.properties или application.yml", "Через конфигурацию в pom.xml", "Через файл logback-default.xml", "Через аннотации @LogConfig", "Только программно через Java-код"],
            correctAnswer: "В файле application.properties или application.yml",
        },
        {
            text: "Какой файл конфигурации используется Logback в Spring Boot?",
            options: ["logback.xml", "logback-config.xml", "spring-log.xml", "application-logback.yml", "logback-spring.xml"],
            correctAnswer: "logback-spring.xml",
        },
        {
            text: "Какой аннотацией можно автоматически подключить логгер в классе Spring?",
            options: ["@EnableLogging", "@Log", "@Log4j", "@Slf4j", "@Logger"],
            correctAnswer: "@Slf4j",
        },
        {
            text: "Как включить асинхронное логирование в Spring Boot?",
            options: ["Настроить AsyncAppender в logback-spring.xml", "Установить уровень логирования на DEBUG", "Включить асинхронный режим в application.properties", "Использовать стандартные настройки Spring Boot", "Добавить аннотацию @AsyncLogging"],
            correctAnswer: "Настроить AsyncAppender в logback-spring.xml",
        },
        {
            text: "Что такое уровень логирования?",
            options: ["Настройка частоты записи логов", "Способ форматирования логов", "Инструмент для работы с потоками", "Метод записи логов в базу данных", "Уровень детализации информации, записываемой в логи"],
            correctAnswer: "Уровень детализации информации, записываемой в логи",
        },
        {
            text: "Какой уровень логирования используется для отладки приложения?",
            options: ["WARN", "INFO", "DEBUG", "FATAL", "ERROR"],
            correctAnswer: "DEBUG",
        },
        {
            text: "Какой уровень логирования следует использовать для записи информации об ошибках?",
            options: ["DEBUG", "TRACE", "WARN", "INFO", "ERROR"],
            correctAnswer: "ERROR",
        },
        {
            text: "Какой Appender записывает логи в файл?",
            options: ["RollingFileAppender", "MemoryAppender", "DatabaseAppender", "FileAppender", "ConsoleAppender"],
            correctAnswer: "FileAppender",
        },
        {
            text: "Что делает RollingFileAppender?",
            options: ["Создает новые файлы логов при достижении заданного размера", "Логирует только последние события", "Архивирует логи автоматически", "Удаляет старые логи после их записи", "Фильтрует логи по ключевым словам"],
            correctAnswer: "Создает новые файлы логов при достижении заданного размера",
        },
        {
            text: "Как настроить вывод логов в log4j на консоль?",
            options: ["Настроить уровень TRACE", "Использовать ConsoleAppender", "Использовать PatternLayout", "Подключить SLF4J", "Использовать FileAppender"],
            correctAnswer: "Использовать ConsoleAppender",
        },
        {
            text: "Какой параметр отвечает за форматирование логов в log4j?",
            options: ["Layout", "Filter", "Appender", "Logger", "Formatter"],
            correctAnswer: "Layout",
        },
        {
            text: "Какой Layout в log4j позволяет настроить простой формат логов?",
            options: ["HTMLLayout", "PatternLayout", "SimpleLayout", "XMLLayout", "JsonLayout"],
            correctAnswer: "SimpleLayout",
        },
        {
            text: "Что такое MDC в логировании?",
            options: ["Функция для форматирования логов", "Компонент для хранения логов в памяти", "Механизм для передачи контекстной информации в логи", "Инструмент для анализа логов", "Уровень логирования для многопоточных приложений"],
            correctAnswer: "Механизм для передачи контекстной информации в логи",
        },
        {
            text: "Что произойдет, если не задать реализацию Appender?",
            options: ["Логирование будет отключено", "Логирование будет происходить в памяти", "Логи автоматически отправятся в файл", "Логи будут записываться в консоль по умолчанию", "Логи не будут записываться"],
            correctAnswer: "Логи не будут записываться",
        },
        {
            text: "Какую библиотеку лучше использовать для асинхронного логирования?",
            options: ["log4j2", "SLF4J", "java.util.logging", "Logback", "AsyncLogger"],
            correctAnswer: "log4j2",
        },
        {
            text: "Как настроить ротацию логов в Logback?",
            options: ["Включить AsyncAppender", "Использовать RollingFileAppender", "Использовать FileAppender", "Настроить ConsoleAppender", "Установить уровень логирования TRACE"],
            correctAnswer: "Использовать RollingFileAppender",
        },
        {
            text: "Какой интерфейс SLF4J используется для работы с логами?",
            options: ["org.slf4j.Log", "org.slf4j.Appender", "org.slf4j.Logger", "org.slf4j.PatternLayout", "org.slf4j.LoggingManager"],
            correctAnswer: "org.slf4j.Logger",
        },
        {
            text: "Как создать экземпляр логгера в SLF4J?",
            options: ["Logger logger = SLF4J.getLogger();", "Logger logger = Logger.create();", "Logger logger = new LoggerFactory();", "Logger logger = LoggerFactory.getLogger(MyClass.class);", "Logger logger = new Logger();"],
            correctAnswer: "LoggerFactory.getLogger(MyClass.class)",
        },
        {
            text: "Какой параметр отвечает за указание уровня логирования в SLF4J?",
            options: ["log.level", "Appender.level", "logging.level", "slf4j.level", "Logger.level"],
            correctAnswer: "logging.level",
        },
        {
            text: "Как настроить логирование в асинхронном режиме в log4j2?",
            options: ["Включить асинхронный режим в конфигурации", "Включить TRACE уровень", "Настроить FileAppender", "Использовать PatternLayout", "Использовать AsyncAppender"],
            correctAnswer: "Использовать AsyncAppender",
        },
        {
            text: "Какой файл отвечает за конфигурацию log4j2?",
            options: ["log4j2-config.xml", "log4j2.xml", "application.properties", "logback.xml", "log4j.xml"],
            correctAnswer: "log4j2.xml",
        },
        {
            text: "Для чего используется аннотация @Test в JUnit?",
            options: ["Для генерации отчета о тестировании", "Для определения метода как тестового", "Для указания на статический метод", "Для создания основного метода", "Для подключения тестовой базы данных"],
            correctAnswer: "Для определения метода как тестового",
        },
        {
            text: "Какая аннотация используется для выполнения кода перед каждым тестом?",
            options: ["@Setup", "@Before", "@After", "@Initialize", "@PreRun"],
            correctAnswer: "@Before",
        },
        {
            text: "Какой метод следует использовать для проверки равенства двух значений в JUnit?",
            options: ["assertEquals()", "assertTrue()", "assertFalse()", "assertNotNull()", "assertSame()"],
            correctAnswer: "assertEquals()",
        },
        {
            text: "Что происходит, если тест в JUnit завершается с исключением?",
            options: ["Тест считается успешным", "Исключение игнорируется", "Тест считается проваленным", "Тест пропускается", "Выполняется метод @After"],
            correctAnswer: "Тест считается проваленным",
        },
        {
            text: "Какой из перечисленных методов не входит в стандартные функции JUnit?",
            options: ["assertThrows()", "validateInput()", "assertArrayEquals()", "assertNotNull()", "assertSame()"],
            correctAnswer: "validateInput()",
        },
    ];
})();

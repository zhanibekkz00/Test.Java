(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant4"] = [
        {
            text: "Что используется для проверки выброса исключения?",
            options: ["assertFalse()", "assertNotNull()", "assertTrue()", "assertEquals()", "assertThrows()"],
            correctAnswer: "assertThrows()",
        },
        {
            text: "Как можно запускать тесты с разными наборами данных в JUnit?",
            options: ["С использованием assertSame()", "Через аннотацию @Test", "С использованием assertArrayEquals()", "Через метод @Before", "С использованием аннотации @ParameterizedTest"],
            correctAnswer: "С использованием аннотации @ParameterizedTest",
        },
        {
            text: "Что используется для группировки тестов в JUnit?",
            options: ["@Cluster", "@GroupTest", "@TestSuite", "@Suite", "@IntegrationTest"],
            correctAnswer: "@Suite",
        },
        {
            text: "Какая аннотация в JUnit позволяет временно отключить тест?",
            options: ["@Postpone", "@Skip", "@IgnoreTest", "@Disabled", "@Exclude"],
            correctAnswer: "@Disabled",
        },
        {
            text: "Какой метод используется для проверки наличия определенного JSON-поля?",
            options: ["checkField()", "andJsonField()", "contentField()", "validateJson()", "jsonPath()"],
            correctAnswer: "jsonPath()",
        },
        {
            text: "Что из перечисленного лучше всего описывает интеграционное тестирование?",
            options: ["Проверка взаимодействия между компонентами", "Тестирование одной функции", "Проверка корректности ввода", "Анализ отказоустойчивости", "Тестирование производительности"],
            correctAnswer: "Проверка взаимодействия между компонентами",
        },
        {
            text: "Какой из статусов HTTP чаще всего используется для успешных POST-запросов?",
            options: ["500", "204", "202", "201", "400"],
            correctAnswer: "201",
        },
        {
            text: "Для проверки метода DELETE в REST API используется:",
            options: ["patch()", "post()", "put()", "delete()", "get()"],
            correctAnswer: "delete()",
        },
        {
            text: "Что из перечисленного не относится к best practices интеграционного тестирования?",
            options: ["Создание тестов, проверяющих взаимодействие компонентов", "Использование изолированных тестовых данных", "Проверка совместимости модулей", "Использование моков и заглушек", "Тестирование одной функции в изоляции"],
            correctAnswer: "Тестирование одной функции в изоляции",
        },
        {
            text: "Какой из подходов помогает ускорить интеграционное тестирование?",
            options: ["Параллельное выполнение тестов", "Использование большого объема данных", "Игнорирование повторяющихся тестов", "Упрощение тестовых сценариев", "Увеличение числа модулей"],
            correctAnswer: "Параллельное выполнение тестов",
        },
        {
            text: "Какой из типов тестов подходит для проверки взаимодействия с внешним API?",
            options: ["Smoke-тесты", "A/B-тесты", "Интеграционные тесты", "Unit-тесты", "Нагрузочные тесты"],
            correctAnswer: "Интеграционные тесты",
        },
        {
            text: "Какую роль выполняют заглушки в интеграционном тестировании?",
            options: ["Оптимизируют производительность", "Эмулируют поведение внешних компонентов", "Повышают производительность тестов", "Ускоряют работу приложения", "Проверяют надежность API"],
            correctAnswer: "Эмулируют поведение внешних компонентов",
        },
        {
            text: "Какой статус лучше всего использовать для успешного ответа на GET-запрос?",
            options: ["200", "400", "500", "202", "201"],
            correctAnswer: "200",
        },
        {
            text: "Что из перечисленного лучше всего описывает юнит-тестирование?",
            options: ["Тестирование взаимодействия компонентов", "Проверка производительности системы", "Тестирование отдельных методов или функций", "Тестирование отказоустойчивости", "Проверка пользовательского интерфейса"],
            correctAnswer: "Тестирование отдельных методов или функций",
        },
        {
            text: "Какую аннотацию в JUnit используют для тестов, которые ожидают определенного исключения?",
            options: ["@TestIgnore", "@Test(expected = Exception.class)", "@ExpectedException", "@AssertException", "@ErrorExpected"],
            correctAnswer: "@Test(expected = Exception.class)",
        },
        {
            text: "Какой из типов тестов позволяет убедиться, что приложение работает корректно после внесения изменений?",
            options: ["Нагрузочные тесты", "Интеграционные тесты", "Приемочные тесты", "Модульные тесты", "Регрессионные тесты"],
            correctAnswer: "Регрессионные тесты",
        },
        {
            text: "Какой HTTP-метод чаще всего используется для обновления существующего ресурса?",
            options: ["PUT", "GET", "PATCH", "POST", "DELETE"],
            correctAnswer: "PUT",
        },
        {
            text: "Что из перечисленного не является преимуществом юнит-тестирования?",
            options: ["Тестирование взаимодействия компонентов", "Упрощение рефакторинга", "Обнаружение ошибок на ранних стадиях", "Быстрая проверка функциональности", "Повышение качества кода"],
            correctAnswer: "Тестирование взаимодействия компонентов",
        },
        {
            text: "Какой из статусов HTTP чаще всего используется для неавторизованных запросов?",
            options: ["400", "500", "404", "401", "200"],
            correctAnswer: "401",
        },
        {
            text: "Что означает аннотация @BeforeEach в JUnit?",
            options: ["Выполняет код перед каждым тестом", "Выполняет код один раз перед запуском тестов", "Выполняет код после завершения всех тестов", "Выполняет код после каждого теста", "Выполняет код перед всеми тестами"],
            correctAnswer: "Выполняет код перед каждым тестом",
        },
        {
            text: "Что означает аннотация @AfterAll в JUnit?",
            options: ["Выполняет код после завершения всех тестов", "Выполняет код перед каждым тестом", "Выполняет код после каждого теста", "Выполняет код только для одного теста", "Выполняет код перед запуском всех тестов"],
            correctAnswer: "Выполняет код после завершения всех тестов",
        },
        {
            text: "Какая из следующих проверок подходит для асинхронного тестирования в JUnit?",
            options: ["assertArrayEquals()", "assertTimeout()", "assertSame()", "assertNotNull()", "assertNull()"],
            correctAnswer: "assertTimeout()",
        },
        {
            text: "Что из перечисленного лучше всего описывает цель интеграционного тестирования?",
            options: ["Обнаружение багов в коде", "Проверка производительности одного компонента", "Улучшение структуры кода", "Проверка взаимодействия между модулями", "Проверка пользовательского интерфейса"],
            correctAnswer: "Проверка взаимодействия между модулями",
        },
        {
            text: "Какой компонент Spring используется для управления зависимостями?",
            options: ["Spring ORM", "Spring Core", "Spring MVC", "Spring Boot", "Spring Context"],
            correctAnswer: "Spring Context",
        },
        {
            text: "Как называется файл конфигурации Spring, используемый по умолчанию?",
            options: ["app.config", "config.properties", "spring.xml", "application.properties", "spring-config.xml"],
            correctAnswer: "application.properties",
        },
        {
            text: "Что означает аннотация @Autowired?",
            options: ["Автоматическая инъекция зависимости", "Определение URL", "Объявление нового сервиса", "Настройка конфигурации", "Управление транзакциями"],
            correctAnswer: "Автоматическая инъекция зависимости",
        },
        {
            text: "Что делает аннотация @RestController?",
            options: ["Создаёт транзакцию", "Определяет класс как контроллер REST API", "Настраивает свойства", "Связывает сервисы", "Управляет зависимостями"],
            correctAnswer: "Определяет класс как контроллер REST API",
        },
        {
            text: "Какая аннотация используется для указания метода как конечной точки?",
            options: ["@Controller", "@RequestMapping", "@Endpoint", "@Autowired", "@Service"],
            correctAnswer: "@RequestMapping",
        },
        {
            text: "Какой модуль Spring используется для работы с базами данных?",
            options: ["Spring Security", "Spring MVC", "Spring Context", "Spring Data", "Spring JDBC"],
            correctAnswer: "Spring Data",
        },
        {
            text: "Что означает аннотация @Transactional?",
            options: ["Управление контекстом", "Оптимизация запроса", "Открытие транзакции для метода", "Объявление контроллера", "Связывание данных"],
            correctAnswer: "Открытие транзакции для метода",
        },
        {
            text: "Какой класс Spring используется для запуска приложения?",
            options: ["SpringStart", "SpringBootLoader", "SpringRunner", "SpringApplication", "SpringContext"],
            correctAnswer: "SpringApplication",
        },
        {
            text: "Что делает аннотация @Component?",
            options: ["Настраивает URL", "Запускает приложение", "Объявляет сервис", "Управляет транзакциями", "Определяет компонент для управления контейнером Spring"],
            correctAnswer: "Определяет компонент для управления контейнером Spring",
        },
        {
            text: "Какой из следующих Docker-команд запускает контейнер?",
            options: ["docker exec", "docker launch", "docker build", "docker start", "docker run"],
            correctAnswer: "docker run",
        },
        {
            text: "Какой файл используется для описания образа Docker?",
            options: ["Docker.config", "DockerManifest", "Dockerfile", "DockerImage", "DockerProps"],
            correctAnswer: "Dockerfile",
        },
        {
            text: "Какой командой создаётся образ из Dockerfile?",
            options: ["docker build", "docker create", "docker run", "docker init", "docker compose"],
            correctAnswer: "docker build",
        },
        {
            text: "Какая команда показывает работающие контейнеры?",
            options: ["docker ls", "docker status", "docker show", "docker ps", "docker list"],
            correctAnswer: "docker ps",
        },
        {
            text: "Как остановить контейнер Docker?",
            options: ["docker remove", "docker halt", "docker stop", "docker pause", "docker kill"],
            correctAnswer: "docker stop",
        },
        {
            text: "Какой ключ используется для указания порта в docker run?",
            options: ["-port", "-v", "-expose", "-e", "-p"],
            correctAnswer: "-p",
        },
        {
            text: "Как удалить контейнер Docker?",
            options: ["docker delete", "docker clean", "docker rm", "docker remove", "docker stop"],
            correctAnswer: "docker rm",
        },
        {
            text: "Как посмотреть логи контейнера?",
            options: ["docker logs", "docker status logs", "docker show logs", "docker view logs", "docker info logs"],
            correctAnswer: "docker logs",
        },
    ];
})();

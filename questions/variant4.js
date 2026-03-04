(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant4"] = [
        {
            text: "Ерекше жағдайдың (исключение) лақтырылғанын тексеру үшін не қолданылады?",
            options: ["assertFalse()", "assertNotNull()", "assertTrue()", "assertEquals()", "assertThrows()"],
            correctAnswer: "assertThrows()",
        },
        {
            text: "JUnit-те әртүрлі деректер жиынтығымен тесттерді қалай іске қосуға болады?",
            options: ["assertSame() қолдану арқылы", "@Test аннотациясы арқылы", "assertArrayEquals() қолдану арқылы", "@Before әдісі арқылы", "@ParameterizedTest аннотациясын қолдану арқылы"],
            correctAnswer: "@ParameterizedTest аннотациясын қолдану арқылы",
        },
        {
            text: "JUnit-те тесттерді топтастыру үшін не қолданылады?",
            options: ["@Cluster", "@GroupTest", "@TestSuite (JUnit 4) немесе @Suite (JUnit 5)", "@Suite", "@IntegrationTest"],
            correctAnswer: "@Suite",
        },
        {
            text: "JUnit-тегі қандай аннотация тестті уақытша өшіруге мүмкіндік береді?",
            options: ["@Postpone", "@Skip", "@IgnoreTest", "@Disabled", "@Exclude"],
            correctAnswer: "@Disabled",
        },
        {
            text: "Белгілі бір JSON-өрісінің бар-жоғын тексеру үшін қандай әдіс қолданылады?",
            options: ["checkField()", "andJsonField()", "contentField()", "validateJson()", "jsonPath()"],
            correctAnswer: "jsonPath()",
        },
        {
            text: "Төмендегілердің қайсысы интеграциялық тестілеуді жақсы сипаттайды?",
            options: ["Компонентер арасындағы өзара әрекеттесуді тексеру", "Бір функцияны тестілеу", "Енгізудің дұрыстығын тексеру", "Ақауға төзімділікті талдау", "Өнімділікті тестілеу"],
            correctAnswer: "Компонентер арасындағы өзара әрекеттесуді тексеру",
        },
        {
            text: "Сәтті POST-сұраныстар үшін HTTP статус-кодтарының қайсысы жиі қолданылады?",
            options: ["500", "204", "202", "201", "400"],
            correctAnswer: "201",
        },
        {
            text: "REST API-де DELETE әдісін тексеру үшін не қолданылады?",
            options: ["patch()", "post()", "put()", "delete()", "get()"],
            correctAnswer: "delete()",
        },
        {
            text: "Төмендегілердің қайсысы интеграциялық тестілеудің 'best practices' (үздік тәжірибелеріне) жатпайды?",
            options: ["Компоненттердің өзара әрекеттесуін тексеретін тесттер құру", "Оқшауланған тестілік деректерді пайдалану", "Модульдердің үйлесімділігін тексеру", "Моктар (mocks) мен бітеуіштерді (stubs) пайдалану", "Бібір функцияны оқшаулап тестілеу"],
            correctAnswer: "Бібір функцияны оқшаулап тестілеу",
        },
        {
            text: "Төмендегі тәсілдердің қайсысы интеграциялық тестілеуді жылдамдатуға көмектеседі?",
            options: ["Тесттерді параллельді орындау", "Деректердің үлкен көлемін пайдалану", "Қайталанатын тесттерді елемеу", "Тестілік сценарийлерді жеңілдету", "Модульдер санын арттыру"],
            correctAnswer: "Тесттерді параллельді орындау",
        },
        {
            text: "Сыртқы API-мен өзара әрекеттесуді тексеру үшін тесттердің қай түрі қолайлы?",
            options: ["Smoke-тесттер", "A/B-тесттер", "Интеграциялық тесттер", "Unit-тесттер", "Жүктемелік (нагрузочные) тесттер"],
            correctAnswer: "Интеграциялық тесттер",
        },
        {
            text: "Интеграциялық тестілеуде бітеуіштер (заглушки) қандай рөл атқарады?",
            options: ["Өнімділікті оңтайландырады", "Сыртқы компоненттердің мінез-құлқын эмуляциялайды", "Тесттердің өнімділігін арттырады", "Қолданба жұмысын жылдамдатады", "API сенімділігін тексереді"],
            correctAnswer: "Сыртқы компоненттердің мінез-құлқын эмуляциялайды",
        },
        {
            text: "Сәтті GET-сұранысқа жауап ретінде қай статус ең қолайлы?",
            options: ["200", "400", "500", "202", "201"],
            correctAnswer: "200",
        },
        {
            text: "Төмендегілердің қайсысы юнит-тестілеуді жақсы сипаттайды?",
            options: ["Компонентердің өзара әрекеттесуін тестілеу", "Жүйенің өнімділігін тексеру", "Жеке әдістерді немесе функцияларды тестілеу", "Ақауға төзімділікті тестілеу", "Пайдаланушы интерфейсін тексеру"],
            correctAnswer: "Жеке әдістерді немесе функцияларды тестілеу",
        },
        {
            text: "JUnit-те белгілі бір ерекше жағдайды (исключение) күтетін тесттер үшін қандай аннотация қолданылады?",
            options: ["@TestIgnore", "@Test(expected = Exception.class)", "@ExpectedException", "@AssertException", "@ErrorExpected"],
            correctAnswer: "@Test(expected = Exception.class)",
        },
        {
            text: "Өзгерістер енгізілгеннен кейін қолданбаның дұрыс жұмыс істеуіне көз жеткізуге мүмкіндік беретін тест түрі қандай?",
            options: ["Жүктемелік тесттер", "Интеграциялық тесттер", "Қабылдау (приемочные) тесттер", "Модульдік тесттер", "Регрессиялық тесттер"],
            correctAnswer: "Регрессиялық тесттер",
        },
        {
            text: "Бар ресурсты жаңарту үшін қай HTTP-әдіс жиі қолданылады?",
            options: ["PUT", "GET", "PATCH", "POST", "DELETE"],
            correctAnswer: "PUT",
        },
        {
            text: "Төмендегілердің қайсысы юнит-тестілеудің артықшылығы болып табылмайды?",
            options: ["Компонентердің өзара әрекеттесуін тестілеу", "Рефакторингті жеңілдету", "Қателерді ерте сатыда анықтау", "Функционалдылықты жылдам тексеру", "Код сапасын арттыру"],
            correctAnswer: "Компонентердің өзара әрекеттесуін тестілеу",
        },
        {
            text: "Авторизацияланбаған сұраныстар үшін HTTP статус-кодтарының қайсысы жиі қолданылады?",
            options: ["400", "500", "404", "401", "200"],
            correctAnswer: "401",
        },
        {
            text: "JUnit-те @BeforeEach аннотациясы нені білдіреді?",
            options: ["Әрбір тесттің алдында кодты орындайды", "Тесттер іске қосылмас бұрын кодты бір рет орындайды", "Барлық тесттер аяқталғаннан кейін кодты орындайды", "Әрбір тесттен кейін кодты орындайды", "Барлық тесттердің алдында кодты орындайды"],
            correctAnswer: "Әрбір тесттің алдында кодты орындайды",
        },
        {
            text: "JUnit-те @AfterAll аннотациясы нені білдіреді?",
            options: ["Барлық тесттер аяқталғаннан кейін кодты орындайды", "Әрбір тесттің алдында кодты орындайды", "Әрбір тесттен кейін кодты орындайды", "Тек бір тест үшін кодты орындайды", "Барлық тесттер іске қосылмас бұрын кодты орындайды"],
            correctAnswer: "Барлық тесттер аяқталғаннан кейін кодты орындайды",
        },
        {
            text: "JUnit-те асинхронды тестілеу үшін төмендегі тексерулердің қайсысы қолайлы?",
            options: ["assertArrayEquals()", "assertTimeout()", "assertSame()", "assertNotNull()", "assertNull()"],
            correctAnswer: "assertTimeout()",
        },
        {
            text: "Төмендегілердің қайсысы интеграциялық тестілеудің мақсатын жақсы сипаттайды?",
            options: ["Кодтағы багтарды анықтау", "Бір компоненттің өнімділігін тексеру", "Код құрылымын жақсарту", "Модульдер арасындағы өзара әрекеттесуді тексеру", "Пайдаланушы интерфейсін тексеру"],
            correctAnswer: "Модульдер арасындағы өзара әрекеттесуді тексеру",
        },
        {
            text: "Spring-тің қай компоненті тәуелділіктерді басқару үшін қолданылады?",
            options: ["Spring ORM", "Spring Core", "Spring MVC", "Spring Boot", "Spring Context"],
            correctAnswer: "Spring Core",
        },
        {
            text: "Әдепкі бойынша қолданылатын Spring конфигурация файлы қалай аталады?",
            options: ["app.config", "config.properties", "spring.xml", "application.properties", "spring-config.xml"],
            correctAnswer: "application.properties",
        },
        {
            text: "@Autowired аннотациясы нені білдіреді?",
            options: ["Тәуелділікті автоматты түрде енгізу (инъекция)", "URL анықтау", "Жаңа сервисті жариялау", "Конфигурацияны баптау", "Транзакцияларды басқару"],
            correctAnswer: "Тәуелділікті автоматты түрде енгізу (инъекция)",
        },
        {
            text: "@RestController аннотациясы не істейді?",
            options: ["Транзакция жасайды", "Класты REST API контроллері ретінде анықтайды", "Қасиеттерді баптайды", "Сервистерді байланыстырады", "Тәуелділіктерді басқарады"],
            correctAnswer: "Класты REST API контроллері ретінде анықтайды",
        },
        {
            text: "Әдісті соңғы нүкте (endpoint) ретінде көрсету үшін қандай аннотация қолданылады?",
            options: ["@Controller", "@RequestMapping", "@Endpoint", "@Autowired", "@Service"],
            correctAnswer: "@RequestMapping",
        },
        {
            text: "Дерекқорлармен жұмыс істеу үшін Spring-тің қай модулі қолданылады?",
            options: ["Spring Security", "Spring MVC", "Spring Context", "Spring Data", "Spring JDBC"],
            correctAnswer: "Spring Data",
        },
        {
            text: "@Transactional аннотациясы нені білдіреді?",
            options: ["Контекстті басқару", "Сұранысты оңтайландыру", "Әдіс үшін транзакция ашу", "Контроллерді жариялау", "Деректерді байланыстыру"],
            correctAnswer: "Әдіс үшін транзакция ашу",
        },
        {
            text: "Қолданбаны іске қосу үшін Spring-тің қай класы қолданылады?",
            options: ["SpringStart", "SpringBootLoader", "SpringRunner", "SpringApplication", "SpringContext"],
            correctAnswer: "SpringApplication",
        },
        {
            text: "@Component аннотациясы не істейді?",
            options: ["URL-ді баптайды", "Қолданбаны іске қосады", "Сервисті жариялайды", "Транзакцияларды басқару", "Spring контейнері басқаруы үшін компонентті анықтайды"],
            correctAnswer: "Spring контейнері басқаруы үшін компонентті анықтайды",
        },
        {
            text: "Төменде Docker-пәрмендерінің қайсысы контейнерді іске қосады?",
            options: ["docker exec", "docker launch", "docker build", "docker start", "docker run"],
            correctAnswer: "docker run",
        },
        {
            text: "Docker бейнесін (образ) сипаттау үшін қай файл қолданылады?",
            options: ["Docker.config", "DockerManifest", "Dockerfile", "DockerImage", "DockerProps"],
            correctAnswer: "Dockerfile",
        },
        {
            text: "Dockerfile-дан бейне (образ) қай пәрменмен құрылады?",
            options: ["docker build", "docker create", "docker run", "docker init", "docker compose"],
            correctAnswer: "docker build",
        },
        {
            text: "Қандай пәрмен жұмыс істеп тұрған контейнерлерді көрсетеді?",
            options: ["docker ls", "docker status", "docker show", "docker ps", "docker list"],
            correctAnswer: "docker ps",
        },
        {
            text: "Docker контейнерін қалай тоқтатуға болады?",
            options: ["docker remove", "docker halt", "docker stop", "docker pause", "docker kill"],
            correctAnswer: "docker stop",
        },
        {
            text: "docker run пәрменінде портты көрсету үшін қай кілт қолданылады?",
            options: ["-port", "-v", "-expose", "-e", "-p"],
            correctAnswer: "-p",
        },
        {
            text: "Docker контейнерін қалай жоюға болады?",
            options: ["docker delete", "docker clean", "docker rm", "docker remove", "docker stop"],
            correctAnswer: "docker rm",
        },
        {
            text: "Контейнер логтарын қалай көруге болады?",
            options: ["docker logs", "docker status logs", "docker show logs", "docker view logs", "docker info logs"],
            correctAnswer: "docker logs",
        },
    ];
})();

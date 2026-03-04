(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant9"] = [
        {
            text: "Что проверяет CI перед деплоем?",
            options: ["Тесты", "Память", "Цвет UI", "Интернет", "Погоду"],
            correctAnswer: "Тесты",
        },
        {
            text: "Какой файл описывает GitHub Actions?",
            options: ["config.xml", "actions.json", ".github/workflows", "ci.txt", "pipeline.yml"],
            correctAnswer: ".github/workflows",
        },
        {
            text: "Какой шаг обязателен в CI?",
            options: ["server restart", "git delete", "echo", "docker stop", "mvn test"],
            correctAnswer: "mvn test",
        },
        {
            text: "Что делает docker-compose?",
            options: ["Компилирует Java", "Тестирует код", "Создаёт БД", "Запускает несколько контейнеров", "Удаляет файлы"],
            correctAnswer: "Запускает несколько контейнеров",
        },
        {
            text: "Что деплоят в CD?",
            options: ["Документацию", "Код на сервер", "Логи", "IDE", "Тесты"],
            correctAnswer: "Код на сервер",
        },
        {
            text: "Что чаще всего деплоят?",
            options: ["Фото", "Исходники", "PDF", "Docker-образ", "Видео"],
            correctAnswer: "Docker-образ",
        },
        {
            text: "Какой протокол чаще всего используют REST-сервисы?",
            options: ["TCP", "SMTP", "FTP", "SSH", "HTTP"],
            correctAnswer: "HTTP",
        },
        {
            text: "Что означает API?",
            options: ["Automated Process Integration", "Application Programming Interface", "Application Process Internet", "Array Processing Interface", "Advanced Program Internet"],
            correctAnswer: "Application Programming Interface",
        },
        {
            text: "Какой метод обновляет только часть ресурса?",
            options: ["PUT", "DELETE", "POST", "GET", "PATCH"],
            correctAnswer: "PATCH",
        },
        {
            text: "Что хранит заголовок Authorization?",
            options: ["Токен доступа", "Данные пользователя", "Пароль сервера", "JSON", "Куки"],
            correctAnswer: "Токен доступа",
        },
        {
            text: "Какой формат чаще всего возвращает REST API?",
            options: ["TXT", "XML", "HTML", "CSV", "JSON"],
            correctAnswer: "JSON",
        },
        {
            text: "Какой файл описывает зависимости Maven?",
            options: ["build.gradle", "package.json", "config.yml", "pom.xml", "requirements.txt"],
            correctAnswer: "pom.xml",
        },
        {
            text: "Что делает аннотация @RequestBody?",
            options: ["Читает заголовки", "Читает тело запроса", "Читает куки", "Читает путь", "Читает параметры URL"],
            correctAnswer: "Читает тело запроса",
        },
        {
            text: "Какой код ошибки означает «не авторизован»?",
            options: ["500", "401", "200", "404", "403"],
            correctAnswer: "401",
        },
        {
            text: "Какой код означает «запрещено»?",
            options: ["403", "500", "404", "401", "200"],
            correctAnswer: "403",
        },
        {
            text: "Что такое JWT?",
            options: ["Java Web Tool", "JSON Web Token", "Java Working Token", "Just Web Text", "Java Web Type"],
            correctAnswer: "JSON Web Token",
        },
        {
            text: "Где обычно хранят токен JWT?",
            options: ["В заголовке Authorization", "В базе данных", "В файле", "В коде сервера", "В имени пользователя"],
            correctAnswer: "В заголовке Authorization",
        },
        {
            text: "Какой слой Spring отвечает за бизнес-логику?",
            options: ["Entity", "Controller", "Repository", "Service", "Config"],
            correctAnswer: "Service",
        },
        {
            text: "Какой слой работает с базой данных?",
            options: ["Mapper", "DTO", "Service", "Controller", "Repository"],
            correctAnswer: "Repository",
        },
        {
            text: "Что такое DTO?",
            options: ["Data Transfer Object", "Default Text Object", "Direct Transfer Option", "Dynamic Type Object", "Database Table Object"],
            correctAnswer: "Data Transfer Object",
        },
        {
            text: "Какой инструмент используют для миграций БД?",
            options: ["Git", "Postman", "Docker", "Swagger", "Flyway"],
            correctAnswer: "Flyway",
        },
        {
            text: "Какой порт по умолчанию у Spring Boot?",
            options: ["8080", "443", "80", "9000", "3000"],
            correctAnswer: "8080",
        },
        {
            text: "Что делает docker-compose up?",
            options: ["Скачивает образы", "Запускает сервисы", "Создаёт БД", "Останавливает систему", "Удаляет контейнеры"],
            correctAnswer: "Запускает сервисы",
        },
        {
            text: "Как остановить контейнер Docker?",
            options: ["docker pause", "docker stop", "docker exit", "docker kill", "docker remove"],
            correctAnswer: "docker stop",
        },
        {
            text: "Что такое Redis?",
            options: ["Реляционная БД", "База данных в памяти", "Инструмент тестирования", "Язык программирования", "Сервер приложений"],
            correctAnswer: "База данных в памяти",
        },
        {
            text: "Для чего часто используют Redis?",
            options: ["Для сборки проекта", "Для компиляции", "Для кэширования", "Для логирования", "Для хранения видео"],
            correctAnswer: "Для кэширования",
        },
        {
            text: "Какой запрос выбирает все записи?",
            options: ["SELECT *", "GET ALL", "FETCH ALL", "SELECT ALL", "FIND ALL"],
            correctAnswer: "SELECT *",
        },
        {
            text: "Что делает JOIN в SQL?",
            options: ["Объединяет таблицы", "Создаёт таблицы", "Удаляет таблицы", "Копирует данные", "Разделяет таблицы"],
            correctAnswer: "Объединяет таблицы",
        },
        {
            text: "Какой инструмент чаще всего используют для тестирования REST API?",
            options: ["PowerPoint", "Excel", "Word", "Paint", "Postman"],
            correctAnswer: "Postman",
        },
        {
            text: "Какой метод используется для сравнения содержимого двух строк в Java?",
            options: ["==", "match()", "equals()", "compare()", "compareTo()"],
            correctAnswer: "equals()",
        },
        {
            text: "Что такое JVM?",
            options: ["Java Verification Module", "Java Variable Method", "Java Visual Monitor", "Java Virtual Machine", "Java Version Manager"],
            correctAnswer: "Java Virtual Machine",
        },
        {
            text: "Какой модификатор доступа делает член класса доступным только внутри того же класса?",
            options: ["internal", "public", "protected", "private", "default"],
            correctAnswer: "private",
        },
        {
            text: "Какой интерфейс необходимо реализовать для создания потока выполнения?",
            options: ["TaskRunner", "Executable", "Runnable", "Thread", "Process"],
            correctAnswer: "Runnable",
        },
        {
            text: "Какое ключевое слово используется для предотвращения изменения значения переменной?",
            options: ["final", "static", "const", "immutable", "readonly"],
            correctAnswer: "final",
        },
        {
            text: "Какой оператор используется для множественного выбора в Java?",
            options: ["switch", "select", "case", "if-else", "choose"],
            correctAnswer: "switch",
        },
        {
            text: "Что возвращает метод indexOf() класса String, если подстрока не найдена?",
            options: ["exception", "-1", "0", "false", "null"],
            correctAnswer: "-1",
        },
        {
            text: "Какая коллекция реализует структуру данных «очередь»?",
            options: ["TreeSet", "ArrayList", "Queue", "Stack", "Vector"],
            correctAnswer: "Queue",
        },
        {
            text: "Какой метод используется для запуска потока в Java?",
            options: ["start()", "begin()", "run()", "init()", "execute()"],
            correctAnswer: "start()",
        },
        {
            text: "Что такое автоупаковка (autoboxing) в Java?",
            options: ["Автоматическое управление памятью", "Автоматическое преобразование примитивов в объекты-обёртки", "Автоматическое создание объектов", "Автоматическая сериализация", "Автоматическая компиляция"],
            correctAnswer: "Автоматическое преобразование примитивов в объекты-обёртки",
        },
        {
            text: "Какой блок выполняется всегда, независимо от наличия исключений?",
            options: ["finally", "try", "catch", "throw", "always"],
            correctAnswer: "finally",
        },
    ];
})();

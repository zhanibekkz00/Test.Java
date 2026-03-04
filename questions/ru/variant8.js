(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant8"] = [
        {
            text: "Что делает @PathVariable?",
            options: ["Читает заголовки", "Читает путь URL", "Читает параметры", "Читает куки", "Читает тело запроса"],
            correctAnswer: "Читает путь URL",
        },
        {
            text: "Какой метод получает данные?",
            options: ["DELETE", "PUT", "GET", "PATCH", "POST"],
            correctAnswer: "GET",
        },
        {
            text: "Какой метод создаёт ресурс?",
            options: ["TRACE", "OPTIONS", "POST", "GET", "DELETE"],
            correctAnswer: "POST",
        },
        {
            text: "Какой код означает «успех»?",
            options: ["500", "200", "301", "403", "404"],
            correctAnswer: "200",
        },
        {
            text: "Какой код означает «не найдено»?",
            options: ["401", "302", "404", "200", "500"],
            correctAnswer: "404",
        },
        {
            text: "Какой код означает «ошибка сервера»?",
            options: ["400", "200", "201", "500", "404"],
            correctAnswer: "500",
        },
        {
            text: "Что такое Postman?",
            options: ["Язык", "Компилятор", "Браузер", "База данных", "Инструмент тестирования API"],
            correctAnswer: "Инструмент тестирования API",
        },
        {
            text: "Где в Postman задают URL?",
            options: ["Headers", "Auth", "Body", "Params", "Address Bar"],
            correctAnswer: "Address Bar",
        },
        {
            text: "Где передают JSON в POST?",
            options: ["Body", "Headers", "Cookies", "URL", "Params"],
            correctAnswer: "Body",
        },
        {
            text: "Какой заголовок указывает формат JSON?",
            options: ["Data: json", "Type: json", "Accept: text", "Format: json", "Content-Type: application/json"],
            correctAnswer: "Content-Type: application/json",
        },
        {
            text: "Какой метод обновляет весь ресурс?",
            options: ["GET", "POST", "DELETE", "PATCH", "PUT"],
            correctAnswer: "PUT",
        },
        {
            text: "Что делает @Entity?",
            options: ["Создаёт поток", "Создаёт сервис", "Создаёт таблицу", "Создаёт лог", "Создаёт контроллер"],
            correctAnswer: "Создаёт таблицу",
        },
        {
            text: "Что такое JPA?",
            options: ["Сервер", "ORM для БД", "Контейнер", "Тест", "Язык"],
            correctAnswer: "ORM для БД",
        },
        {
            text: "Как пометить первичный ключ?",
            options: ["@Id", "@Key", "@PK", "@Primary", "@Column"],
            correctAnswer: "@Id",
        },
        {
            text: "Как сохранить объект в БД?",
            options: ["save", "push", "commit", "store", "insert"],
            correctAnswer: "save",
        },
        {
            text: "Какой интерфейс Spring Data используют чаще всего?",
            options: ["Crud", "JpaRepository", "Map", "Set", "List"],
            correctAnswer: "JpaRepository",
        },
        {
            text: "Что означает SQL?",
            options: ["Server Query", "Simple Query Language", "System Query", "Smart Query", "Structured Query Language"],
            correctAnswer: "Structured Query Language",
        },
        {
            text: "Как выбрать все записи?",
            options: ["FETCH", "READ ALL", "SELECT *", "FIND ALL", "GET ALL"],
            correctAnswer: "SELECT *",
        },
        {
            text: "Как удалить запись?",
            options: ["ERASE", "REMOVE", "DELETE", "DROP", "CLEAR"],
            correctAnswer: "DELETE",
        },
        {
            text: "Что делает JOIN?",
            options: ["Удаляет", "Создаёт", "Копирует", "Разделяет", "Объединяет таблицы"],
            correctAnswer: "Объединяет таблицы",
        },
        {
            text: "Какой БД часто используют со Spring?",
            options: ["MySQL", "Paint", "Excel", "Chrome", "Word"],
            correctAnswer: "MySQL",
        },
        {
            text: "Какой уровень логов самый высокий?",
            options: ["TRACE", "DEBUG", "ERROR", "INFO", "WARN"],
            correctAnswer: "ERROR",
        },
        {
            text: "Как создать логгер?",
            options: ["LoggerFactory.getLogger", "System.out", "new Logger()", "print", "log.start"],
            correctAnswer: "LoggerFactory.getLogger",
        },
        {
            text: "Где хранятся логи?",
            options: ["В памяти", "В браузере", "В Git", "В файлах", "В Excel"],
            correctAnswer: "В файлах",
        },
        {
            text: "Что логируют на уровне DEBUG?",
            options: ["Ошибки", "Критические сбои", "Инфо", "Детали отладки", "Всё"],
            correctAnswer: "Детали отладки",
        },
        {
            text: "Какой формат логов популярен?",
            options: ["JSON", "PNG", "MP3", "DOCX", "TXT"],
            correctAnswer: "TXT",
        },
        {
            text: "Какой фреймворк для тестов?",
            options: ["Docker", "JUnit", "Maven", "Spring", "Git"],
            correctAnswer: "JUnit",
        },
        {
            text: "Как пометить тест?",
            options: ["@Run", "@Verify", "@Test", "@Main", "@Check"],
            correctAnswer: "@Test",
        },
        {
            text: "Что делает assertEquals?",
            options: ["Считает время", "Логирует", "Проверяет равенство", "Проверяет память", "Останавливает"],
            correctAnswer: "Проверяет равенство",
        },
        {
            text: "Что такое mock?",
            options: ["Заглушка", "БД", "Поток", "Сервер", "Реальный объект"],
            correctAnswer: "Заглушка",
        },
        {
            text: "Какой инструмент для моков?",
            options: ["Docker", "Git", "Mockito", "JPA", "Spring"],
            correctAnswer: "Mockito",
        },
        {
            text: "Что такое Docker?",
            options: ["Сервер", "БД", "Язык", "IDE", "Контейнеризация"],
            correctAnswer: "Контейнеризация",
        },
        {
            text: "Как создать образ?",
            options: ["docker start", "docker pull", "docker exec", "docker run", "docker build"],
            correctAnswer: "docker build",
        },
        {
            text: "Как запустить контейнер?",
            options: ["docker push", "docker exec", "docker run", "docker create", "docker build"],
            correctAnswer: "docker run",
        },
        {
            text: "Как посмотреть контейнеры?",
            options: ["docker show", "docker ps", "docker status", "docker list", "docker view"],
            correctAnswer: "docker ps",
        },
        {
            text: "Как скачать образ?",
            options: ["docker get", "docker pull", "docker push", "docker load", "docker fetch"],
            correctAnswer: "docker pull",
        },
        {
            text: "Что такое CI?",
            options: ["Code Injection", "Compiler Input", "Cloud Internet", "Computer Interface", "Continuous Integration"],
            correctAnswer: "Continuous Integration",
        },
        {
            text: "Что такое CD?",
            options: ["Continuous Debug", "Cloud Database", "Continuous Deployment", "Container Docker", "Code Delivery"],
            correctAnswer: "Continuous Deployment",
        },
        {
            text: "Какой инструмент CI/CD популярен?",
            options: ["Eclipse", "Word", "Notepad", "Chrome", "GitHub Actions"],
            correctAnswer: "GitHub Actions",
        },
        {
            text: "Что делает pipeline?",
            options: ["Удаляет файлы", "Автоматизирует сборку", "Меняет язык", "Запускает игру", "Чистит код"],
            correctAnswer: "Автоматизирует сборку",
        },
    ];
})();

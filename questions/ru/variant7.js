(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant7"] = [
        {
            text: "Что делает RollingFileAppender?",
            options: ["Создает новые файлы логов при достижении заданного размера", "Удаляет старые логи после их записи", "Логирует только последние события", "Архивирует логи автоматически", "Фильтрует логи по ключевым словам"],
            correctAnswer: "Создает новые файлы логов при достижении заданного размера",
        },
        {
            text: "Как настроить вывод логов в log4j на консоль?",
            options: ["Подключить SLF4J", "Использовать ConsoleAppender", "Настроить уровень TRACE", "Использовать PatternLayout", "Использовать FileAppender"],
            correctAnswer: "Использовать ConsoleAppender",
        },
        {
            text: "Какой параметр отвечает за форматирование логов в log4j?",
            options: ["Filter", "Layout", "Appender", "Formatter", "Logger"],
            correctAnswer: "Layout",
        },
        {
            text: "Какой Layout в log4j позволяет настроить простой формат логов?",
            options: ["SimpleLayout", "HTMLLayout", "XMLLayout", "PatternLayout", "JsonLayout"],
            correctAnswer: "SimpleLayout",
        },
        {
            text: "Что такое MDC в логировании?",
            options: ["Уровень логирования для многопоточных приложений", "Инструмент для анализа логов", "Компонент для хранения логов в памяти", "Функция для форматирования логов", "Механизм для передачи контекстной информации в логи"],
            correctAnswer: "Механизм для передачи контекстной информации в логи",
        },
        {
            text: "Что произойдет, если не задать реализацию Appender?",
            options: ["Логирование будет происходить в памяти", "Логи будут записываться в консоль по умолчанию", "Логи не будут записываться", "Логи автоматически отправятся в файл", "Логирование будет отключено"],
            correctAnswer: "Логи не будут записываться",
        },
        {
            text: "Какую библиотеку лучше использовать для асинхронного логирования?",
            options: ["SLF4J", "AsyncLogger", "log4j2", "java.util.logging", "Logback"],
            correctAnswer: "log4j2",
        },
        {
            text: "Что означает CD?",
            options: ["Container Docker", "Code Delivery", "Continuous Deployment", "Continuous Debug", "Cloud Database"],
            correctAnswer: "Continuous Deployment",
        },
        {
            text: "Какой инструмент CI/CD популярен?",
            options: ["Eclipse", "Word", "Chrome", "GitHub Actions", "Notepad"],
            correctAnswer: "GitHub Actions",
        },
        {
            text: "Что делает pipeline?",
            options: ["Меняет язык", "Чистит код", "Удаляет файлы", "Автоматизирует сборку", "Запускает игру"],
            correctAnswer: "Автоматизирует сборку",
        },
        {
            text: "Что проверяет CI перед деплоем?",
            options: ["Интернет", "Погоду", "Тесты", "Цвет интерфейса", "Память"],
            correctAnswer: "Тесты",
        },
        {
            text: "Какое ключевое слово создаёт объект?",
            options: ["object", "build", "new", "make", "create"],
            correctAnswer: "new",
        },
        {
            text: "Что хранит переменная типа String?",
            options: ["Символы", "Объекты", "Числа", "Массивы", "Строки"],
            correctAnswer: "Строки",
        },
        {
            text: "Какой цикл лучше для перебора массива?",
            options: ["if", "case", "try", "switch", "for"],
            correctAnswer: "for",
        },
        {
            text: "Что делает break в цикле?",
            options: ["Прерывает цикл", "Ничего", "Перезапускает цикл", "Продолжает цикл", "Удаляет переменную"],
            correctAnswer: "Прерывает цикл",
        },
        {
            text: "Что возвращает метод с void?",
            options: ["int", "ничего", "boolean", "String", "double"],
            correctAnswer: "ничего",
        },
        {
            text: "Какой тип хранит дробные числа?",
            options: ["boolean", "long", "char", "double", "int"],
            correctAnswer: "double",
        },
        {
            text: "Как объявить массив?",
            options: ["list a", "int[] a", "int a[]", "int a{}", "array a"],
            correctAnswer: "int[] a",
        },
        {
            text: "Что делает this?",
            options: ["Печатает", "Удаляет объект", "Создаёт объект", "Ссылается на текущий объект", "Сравнивает"],
            correctAnswer: "Ссылается на текущий объект",
        },
        {
            text: "Какой метод есть у всех классов?",
            options: ["print", "start", "main", "toString", "run"],
            correctAnswer: "toString",
        },
        {
            text: "Какой интерфейс хранит уникальные элементы?",
            options: ["List", "Queue", "Map", "Set", "Array"],
            correctAnswer: "Set",
        },
        {
            text: "Как создать копию удалённого репозитория?",
            options: ["git pull", "git clone", "git copy", "git fork", "git init"],
            correctAnswer: "git clone",
        },
        {
            text: "Как посмотреть изменённые файлы?",
            options: ["git status", "git diff", "git check", "git show", "git log"],
            correctAnswer: "git status",
        },
        {
            text: "Как отменить последний коммит, сохранив изменения?",
            options: ["git clear", "git reset --soft", "git rm", "git revert", "git drop"],
            correctAnswer: "git reset --soft",
        },
        {
            text: "Что делает git stash?",
            options: ["Создаёт ветку", "Удаляет изменения", "Временно сохраняет изменения", "Сливает ветки", "Отправляет в GitHub"],
            correctAnswer: "Временно сохраняет изменения",
        },
        {
            text: "Как удалить ветку локально?",
            options: ["git delete", "git remove", "git branch -d", "git drop", "git erase"],
            correctAnswer: "git branch -d",
        },
        {
            text: "Как показать список веток?",
            options: ["git list", "git show", "git branches", "git tree", "git branch"],
            correctAnswer: "git branch",
        },
        {
            text: "Что делает git fetch?",
            options: ["Отправляет изменения", "Скачивает изменения без слияния", "Удаляет коммиты", "Перезапускает git", "Сливает ветки"],
            correctAnswer: "Скачивает изменения без слияния",
        },
        {
            text: "Как объединить изменения?",
            options: ["git merge", "git mix", "git attach", "git combine", "git join"],
            correctAnswer: "git merge",
        },
        {
            text: "Что такое конфликт?",
            options: ["Ошибка сети", "Ошибка компиляции", "Несовместимые изменения", "Удалённый файл", "Баг"],
            correctAnswer: "Несовместимые изменения",
        },
        {
            text: "Как открыть историю одной ветки?",
            options: ["git history", "git list", "git show-all", "git trace", "git log branch"],
            correctAnswer: "git log branch",
        },
        {
            text: "Какая аннотация делает класс REST-контроллером?",
            options: ["@Service", "@RestController", "@Controller", "@Component", "@Bean"],
            correctAnswer: "@RestController",
        },
        {
            text: "Как принять GET-запрос?",
            options: ["@PutMapping", "@PostMapping", "@DeleteMapping", "@Request", "@GetMapping"],
            correctAnswer: "@GetMapping",
        },
        {
            text: "Где хранится конфигурация Spring Boot?",
            options: ["app.xml", "config.json", "boot.ini", "application.properties", "spring.cfg"],
            correctAnswer: "application.properties",
        },
        {
            text: "Что делает @Service?",
            options: ["Запускает сервер", "Создаёт БД", "Обрабатывает HTTP", "Управляет памятью", "Логика приложения"],
            correctAnswer: "Логика приложения",
        },
        {
            text: "Что делает @Repository?",
            options: ["Логика", "Валидация", "Потоки", "Контроллер", "Работа с БД"],
            correctAnswer: "Работа с БД",
        },
        {
            text: "Как внедрить зависимость?",
            options: ["@Link", "@InjectNow", "@Use", "@Autowired", "@Connect"],
            correctAnswer: "@Autowired",
        },
        {
            text: "Какой сервер встроен в Spring Boot?",
            options: ["Apache", "Tomcat", "Nginx", "Jetty", "IIS"],
            correctAnswer: "Tomcat",
        },
        {
            text: "Как указать порт сервера?",
            options: ["server.port", "http.port", "boot.port", "app.port", "port.app"],
            correctAnswer: "server.port",
        },
        {
            text: "Какой формат чаще всего используют в REST?",
            options: ["CSV", "JSON", "HTML", "XML", "TXT"],
            correctAnswer: "JSON",
        },
    ];
})();

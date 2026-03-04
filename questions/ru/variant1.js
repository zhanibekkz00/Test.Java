(function () {
    window.__QUIZ_VARIANTS = window.__QUIZ_VARIANTS || {};

    window.__QUIZ_VARIANTS["variant1"] = [
        {
            text: "Какая команда используется для компиляции Java-программы через командную строку?",
            options: ["compile", "java", "javac", "execute", "run"],
            correctAnswer: "javac",
        },
        {
            text: "Как называется метод, с которого начинается выполнение программы в Java?",
            options: ["run()", "init()", "main()", "start()", "execute()"],
            correctAnswer: "main()",
        },
        {
            text: "Какое расширение имеет файл, содержащий Java-исходный код?",
            options: [".src", ".class", ".jav", ".code", ".java"],
            correctAnswer: ".java",
        },
        {
            text: "Какой оператор используется для создания объекта в Java?",
            options: ["make", "this", "object", "create", "new"],
            correctAnswer: "new",
        },
        {
            text: "Как называется структура, которая позволяет выполнять действия в зависимости от логического условия?",
            options: ["функция", "массив", "условный оператор", "цикл", "объект"],
            correctAnswer: "условный оператор",
        },
        {
            text: "Какой из операторов используется для проверки равенства в Java?",
            options: ["!=", "==", "=", "equals()", "==="],
            correctAnswer: "==",
        },
        {
            text: "Как называется цикл, который выполняется, пока условие истинно?",
            options: ["switch", "for", "do", "while", "if"],
            correctAnswer: "while",
        },
        {
            text: "Какой модификатор указывает, что метод принадлежит классу, а не объекту?",
            options: ["abstract", "static", "private", "public", "final"],
            correctAnswer: "static",
        },
        {
            text: "Что используется для группировки переменных и методов, связанных логически в Java?",
            options: ["объект", "пакет", "массив", "класс", "интерфейс"],
            correctAnswer: "класс",
        },
        {
            text: "Как называется базовый класс для всех классов в Java?",
            options: ["Base", "Object", "String", "System", "Class"],
            correctAnswer: "Object",
        },
        {
            text: "Какой метод класса Object возвращает строковое представление объекта?",
            options: ["getString()", "toString()", "equals()", "clone()", "hashCode()"],
            correctAnswer: "toString()",
        },
        {
            text: "Как создаётся одномерный массив в Java?",
            options: ["int arr(5);", "int[] arr = {};", "int[] arr = new int[5];", "int arr = [5];", "int arr = array(5);"],
            correctAnswer: "int[] arr = new int[5];",
        },
        {
            text: "Какой метод используется для вычисления длины массива?",
            options: ["arraySize", "getLength", "count", "size", "length"],
            correctAnswer: "length",
        },
        {
            text: "Какая коллекция является реализацией динамического массива?",
            options: ["TreeSet", "Vector", "HashMap", "PriorityQueue", "ArrayList"],
            correctAnswer: "ArrayList",
        },
        {
            text: "Какой из следующих классов поддерживает обобщения (Generics)?",
            options: ["Set", "Vector", "ArrayList", "HashMap", "LinkedList"],
            correctAnswer: "ArrayList",
        },
        {
            text: "Что произойдет при попытке обратиться к элементу массива с индексом за пределами длины?",
            options: ["Ничего", "Программа завершится без ошибки", "Будет создан новый элемент", "Вернётся null", "Бросится исключение ArrayIndexOutOfBoundsException"],
            correctAnswer: "Бросится исключение ArrayIndexOutOfBoundsException",
        },
        {
            text: "Как называется блок кода, где обрабатываются исключения?",
            options: ["throw", "catch", "finally", "handle", "try-catch"],
            correctAnswer: "try-catch",
        },
        {
            text: "Какой оператор используется для генерации исключения?",
            options: ["throw", "catch", "finally", "raises", "try"],
            correctAnswer: "throw",
        },
        {
            text: "Какая коллекция используется для хранения уникальных элементов?",
            options: ["Stack", "Array", "HashSet", "ArrayList", "List"],
            correctAnswer: "HashSet",
        },
        {
            text: "Какая коллекция хранит элементы в порядке добавления?",
            options: ["LinkedList", "TreeMap", "PriorityQueue", "HashSet", "OrderedList"],
            correctAnswer: "LinkedList",
        },
        {
            text: "Какой класс используется для обработки объектов в стиле ключ-значение?",
            options: ["Dictionary", "List", "HashMap", "ArrayList", "Stack"],
            correctAnswer: "HashMap",
        },
        {
            text: "Какой оператор используется для проверки экземпляра объекта?",
            options: ["is", "typeof", "instance", "equals", "instanceof"],
            correctAnswer: "instanceof",
        },
        {
            text: "Как называется метод, который завершается всегда?",
            options: ["end()", "finally()", "finally", "try()", "throw()"],
            correctAnswer: "finally",
        },
        {
            text: "Какой класс используется для сериализации объектов?",
            options: ["ObjectOutputStream", "Serializer", "DataOutput", "String", "FileReader"],
            correctAnswer: "ObjectOutputStream",
        },
        {
            text: "Какая структура данных используется для хранения данных в виде стека?",
            options: ["Stack", "Array", "Queue", "List", "Deque"],
            correctAnswer: "Stack",
        },
        {
            text: "Какой модификатор доступа запрещает наследование класса?",
            options: ["final", "static", "sealed", "protected", "private"],
            correctAnswer: "final",
        },
        {
            text: "Какой метод можно переопределить для выполнения собственной логики сравнения объектов?",
            options: ["hashCode()", "toString()", "equals()", "clone()", "compare()"],
            correctAnswer: "equals()",
        },
        {
            text: "Какой из следующих классов реализует интерфейс Map?",
            options: ["HashMap", "Vector", "Collection", "ArrayList", "TreeSet"],
            correctAnswer: "HashMap",
        },
        {
            text: "Что из ниже перечисленного является основным модулем Spring Framework?",
            options: ["JPA", "Maven", "Hibernate", "Kubernetes", "Core Container"],
            correctAnswer: "Core Container",
        },
        {
            text: "Какой модуль отвечает за управление объектами в Spring?",
            options: ["Data Access", "Security", "Aspect-Oriented Programming", "Core Container", "Web"],
            correctAnswer: "Core Container",
        },
        {
            text: "Для чего используется модуль Spring MVC?",
            options: ["Интеграция с другими фреймворктармен", "Управление безопасностью приложения", "Обработка запросов и создание веб-интерфейсов", "Работа с базами данных", "Управление транзакциями"],
            correctAnswer: "Обработка запросов и создание веб-интерфейсов",
        },
        {
            text: "Какой модуль Spring поддерживает внедрение зависимостей (Dependency Injection)?",
            options: ["Context", "Expression Language", "Test", "Core Container", "Security"],
            correctAnswer: "Core Container",
        },
        {
            text: "Чем Spring Boot отличается от классического Spring Framework?",
            options: ["Отсутствием встроенных серверов", "Невозможностью создания REST API", "Поддержкой автоматической конфигурации", "Наличием только модульной структуры", "Отсутствием поддержки аннотаций"],
            correctAnswer: "Поддержкой автоматической конфигурации",
        },
        {
            text: "Какой встроенный сервер чаще всего используется с Spring Boot?",
            options: ["Apache Tomcat", "WildFly", "GlassFish", "Undertow", "Jetty"],
            correctAnswer: "Apache Tomcat",
        },
        {
            text: "Какая аннотация используется для создания REST-контроллера в Spring Boot?",
            options: ["@Controller", "@Service", "@Repository", "@RestController", "@Component"],
            correctAnswer: "@RestController",
        },
        {
            text: "Какой файл используется для настройки Spring Boot приложения?",
            options: ["settings.yml", "bootstrap.xml", "application.properties", "spring-config.yml", "application.json"],
            correctAnswer: "application.properties",
        },
        {
            text: "Что такое Spring Data JPA?",
            options: ["Инструмент для тестирования", "Абстракция для работы с базами данных", "Инструмент управления сессиями", "Утилита для работы с XML", "Модуль для интеграции с REST API"],
            correctAnswer: "Абстракция для работы с базами данных",
        },
        {
            text: "Какая аннотация определяет сущность в JPA?",
            options: ["@Entity", "@Id", "@Column", "@Data", "@Table"],
            correctAnswer: "@Entity",
        },
        {
            text: "Какой метод из репозитория Spring Data возвращает объект по его идентификатору?",
            options: ["findAll()", "getById()", "save()", "findById()", "deleteById()"],
            correctAnswer: "findById()",
        },
        {
            text: "Какая аннотация используется для задания первичного ключа в сущности JPA?",
            options: ["@Key", "@PrimaryKey", "@Id", "@Column", "@Generated"],
            correctAnswer: "@Id",
        },
    ];
})();

TODO:
- Considerar hacer un tipo de datos para las requests

const request = async <T>(
  method: string,
  endpoint: string,
  data: object = {},
  headers: HeadersInit = {},
  useAuth: boolean = true,
  nextApiRoute: boolean = true,
)

Que los argumentos sean un tipo definido para facilitar la lectura

- Considerar usar funciones distintas para las llamadas a la API de Next.js, la gran mayoria de requests son al backend y es confuso tener esa configuración para todas las requests
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Exercicios
{
    public class ProfessorDesserializar
    {
        var obj; 
        public ProfessorDesserializar(string jsonStrings)
        {
            obj = JsonSerializer.Deserialize<Professor>(jsonString);
        }

    }
}
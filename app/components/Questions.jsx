import QuestionItem from "./QuestionItem";


export default function Questions() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-4 mt-16">Preguntas frecuentes</h1>
      <div className="flex flex-col space-y-12">
        <QuestionItem
          question="¿Qué es aDEViento?"
          answer="aDEViento es un calendario de adviento para desarrolladores. Cada día se desbloqueará un nuevo reto. Para desbloquear el reto del día siguiente, debes resolver el reto del día anterior."
        />
        <QuestionItem
          question="¿Dónde encuentro el código fuente?"
          answer="El código fuente está disponible en GitHub:"
        />
        <QuestionItem
          question="¿Es gratis?"
          answer="Sí, jugar al AdventJS es totalmente gratis. Del 1 al 24 de diciembre tendrás un nuevo reto disponible."
        />
        <QuestionItem
          question="¿Esto es una idea original?"
          answer="No, AdventJS está inspirado en el calendario de adviento de Midudev y MoureDev."
        />
        <QuestionItem
          question="¿Cómo puedo apoyar el proyecto?"
          answer="Si quieres ayudarnos, comparte el proyecto en las redes sociales y con tus amigos para que más gente participe. También puedes ayudarnos a mejorar el proyecto con tus ideas y sugerencias."
        />
        <QuestionItem
          question="¿Se puede intentar varias soluciones para tener mayor puntuación?"
          answer="No, solo se puede enviar una solución por día. Si se envía una solución nueva, se sobreescribe la anterior."
        />
      </div>
    </div>
  );
}

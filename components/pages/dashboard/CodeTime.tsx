import { Languages } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CodeTimeProps {
  started: string;
  totalTime: string;
  languages: Languages[];
}

export const CodeTime = ({ started, totalTime, languages }: CodeTimeProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium  dark:text-green-300">
            Coding hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold  dark:text-green-300">
            {totalTime}
          </div>
          <p className="text-xs text-muted-foreground  dark:text-green-300">
            {started}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium  dark:text-green-300">
            Most used language
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold  dark:text-green-300">
            {languages[0].name}
          </div>
          <p className="text-xs text-muted-foreground  dark:text-green-300">
            {languages[0].text}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

import { match } from 'assert';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReder and pass in something satisfying
// the 'DataReader' insterface
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

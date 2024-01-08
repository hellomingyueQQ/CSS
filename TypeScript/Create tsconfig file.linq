<Query Kind="Program">
  <NuGetReference>Newtonsoft.Json</NuGetReference>
  <Namespace>Newtonsoft.Json</Namespace>
  <Namespace>Newtonsoft.Json.Bson</Namespace>
  <Namespace>Newtonsoft.Json.Converters</Namespace>
  <Namespace>Newtonsoft.Json.Linq</Namespace>
  <Namespace>Newtonsoft.Json.Schema</Namespace>
  <Namespace>Newtonsoft.Json.Serialization</Namespace>
  <Namespace>System.Text.Json</Namespace>
</Query>

void Main()
{
	TSConfig obj = new TSConfig
	{
		Includes = new List<string> { "src/**/*", "tests/**/*" },
		Excludes = new List<string> { "./src/hello/**/*" },
		CompilerOptions = new CompilerOptions()
		{
			Target = TargetEnum.ES3
		},
		OutDir = "./dist",
		AllowJs = false,
		Strict = false,
		AlwaysStrict = true
	};
	JsonSerializerSettings settings = new JsonSerializerSettings
	{
		Formatting = Newtonsoft.Json.Formatting.Indented,
		ContractResolver = new LowercaseContractResolver(),
		NullValueHandling = NullValueHandling.Ignore,
		Converters = new List<JsonConverter> { new StringEnumConverter() }
	};

	string json = JsonConvert.SerializeObject(obj, settings);
	json.Dump();

}

public class TSConfig
{
	public List<string> Includes { get; set; }

	public List<string> Excludes { get; set; }

	public CompilerOptions CompilerOptions { get; set; }

	public List<string> Lib { get; set; }

	public string OutDir { get; set; }

	public string OutFile { get; set; }

	public bool? AllowJs { get; set; }

	public bool? CheckJs { get; set; }

	public bool? RemoveComments { get; set; }

	public bool? NoEmit { get; set; }

	public bool? NoEmitOnError { get; set; }
	
	public bool? AlwaysStrict{get;set;}
	
	public bool? NoImplicitAny {get;set;}
	
	public bool? NoImplicitThis {get;set;}

	public bool? StrictNullChecks { get; set; }
	
	public bool? Strict { get; set; }
	
}

public class CompilerOptions
{
	public TargetEnum Target { get; set; }
}

public enum TargetEnum
{
	ES3,
	ES5,
	ES6,
}

public class LowercaseContractResolver : DefaultContractResolver
{
	protected override string ResolvePropertyName(string propertyName)
	{
		return char.ToLower(propertyName[0]) + propertyName.Substring(1);
	}
}



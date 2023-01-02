$current_directory = [Environment]::CurrentDirectory;
$src_path = "${current_directory}\src"
$template_path = "${src_path}\modules\template";
$notes_path = "${src_path}\notes";
$practice_path = "${src_path}\practice";
$IOFile = [System.IO.File];
$IODirectory = [System.IO.Directory];
$IOPath = [System.IO.Path]

function take-note ($name, $base = "$template_path\general") {
  $local_path = "${notes_path}\${name}";
  clone-files -path $base -newpath $local_path;

  code "${local_path}\src\code.js";
}

function make-practice ($name, $base = "$template_path\general") {
  $local_path = "${practice_path}\${name}";
  clone-files -path $base -newpath $local_path;
}

function load-template ($name) {
  $templates = $IODirectory::GetDirectories($template_path);
  foreach($path in $templates) {
    $_name = $IOPath::GetFileName($path);
    if($_name.ToLower() -eq $name.ToLower()) {
      clone-files -path $path -newPath (Get-Location).ProviderPath;
      break;
    }
  }
}

function clone-files ($path, $newpath) {
  if(!$IODirectory::Exists($newpath)) {$IODirectory::CreateDirectory($newpath);}

  $filespath = $IODirectory::GetFiles($path);
  $directories = $IODirectory::GetDirectories($path);

  foreach($filepath in $filespath) {
    $filename = $IOPath::GetFileName($filepath);
    $new_filepath = "${newpath}\${filename}";
    $IOFile::Copy($filepath, $new_filepath, $false);
  }

  foreach($directory in $directories) {
    $directoryName = $IOPath::GetFileName($directory);
    $newDirectory = "${newpath}\${directoryName}";
    clone-files -path $directory -newpath $newDirectory;
  }
}